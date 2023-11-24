from typing import List
from pyaskit import defun_hinted, define_hinted

valid_date = define_hinted(
    bool,
    """
    Validates given date string {{date}} and
    returns True if the date is valid otherwise False.
    The date is valid if all of the following rules are satisfied:
    1. The date string is not empty.
    2. The number of days is not less than 1 or higher than 31 days for months 1,3,5,7,8,10,12. And the number of days is not less than 1 or higher than 30 days for months 4,6,9,11. And, the number of days is not less than 1 or higher than 29 for the month 2.
    3. The months should not be less than 1 or higher than 12.
    4. The date should be in the format: mm-dd-yyyy
    """,
    training_examples=[
        {"input": {"date": '03-11-2000'}, "output": True},
        {"input": {"date": '15-01-2012'}, "output": False},
        {"input": {"date": '04-0-2040'}, "output": False},
        {"input": {"date": '06-04-2020'}, "output": True},
        {"input": {"date": '06/04/2020'}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"date": '03-11-2000'}, "output": True},
            {"input": {"date": '15-01-2012'}, "output": False},
            {"input": {"date": '04-0-2040'}, "output": False},
            {"input": {"date": '06-04-2020'}, "output": True},
            {"input": {"date": '01-01-2007'}, "output": True},
            {"input": {"date": '03-32-2011'}, "output": False},
            {"input": {"date": ""}, "output": False},
            {"input": {"date": '04-31-3000'}, "output": False},
            {"input": {"date": '06-06-2005'}, "output": True},
            {"input": {"date": '21-31-2000'}, "output": False},
            {"input": {"date": '04-12-2003'}, "output": True}]
    )
