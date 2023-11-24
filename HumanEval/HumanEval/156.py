from typing import List
from pyaskit import defun_hinted, define_hinted

int_to_mini_roman = define_hinted(
    str,
    """
    Given a positive integer {{number}}, obtain its roman numeral equivalent as a string,
    and return it in lowercase.
    Restrictions: 1 <= num <= 1000
    """,
    training_examples=[
        {"input": {"number": 19}, "output": 'xix'},
        {"input": {"number": 152}, "output": 'clii'},
        {"input": {"number": 426}, "output": 'cdxxvi'}]
    ).compile(
        test_examples=[
            {"input": {"number": 19}, "output": 'xix'},
            {"input": {"number": 152}, "output": 'clii'},
            {"input": {"number": 251}, "output": 'ccli'},
            {"input": {"number": 426}, "output": 'cdxxvi'},
            {"input": {"number": 500}, "output": 'd'},
            {"input": {"number": 1}, "output": 'i'},
            {"input": {"number": 4}, "output": 'iv'},
            {"input": {"number": 43}, "output": 'xliii'},
            {"input": {"number": 90}, "output": 'xc'},
            {"input": {"number": 94}, "output": 'xciv'},
            {"input": {"number": 532}, "output": 'dxxxii'},
            {"input": {"number": 900}, "output": 'cm'},
            {"input": {"number": 994}, "output": 'cmxciv'},
            {"input": {"number": 1000}, "output": 'm'},
        ]
    )
