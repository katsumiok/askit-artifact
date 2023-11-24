from typing import List
from pyaskit import defun_hinted, define_hinted

check_dict_case = defun_hinted(
    bool,
    {'dict': dict},
    """ Given a dictionary {{dict}}, return True if all keys are strings in lower 
    case or all keys are strings in upper case, else return False.
    The function should return False is the given dictionary is empty.
     """,
    training_examples=[
        {"input": {"dict": {"a":"apple", "b":"banana"}},  "output": True},
        {"input": {"dict": {"a":"apple", "A":"banana", "B":"banana"}}, "output": False},
        {"input": {"dict": {"a":"apple", 8:"banana", "a":"apple"}}, "output": False},
        {"input": {"dict": {"Name":"John", "Age":"36", "City":"Houston"}}, "output": False},
        {"input": {"dict": {"STATE":"NC", "ZIP":"12345"}},  "output": True}]
    ).compile(
        test_examples=[
            {"input": {"dict": {"p":"pineapple", "b":"banana"}},  "output": True},
            {"input": {"dict": {"p":"pineapple", "A":"banana", "B":"banana"}}, "output": False},
            {"input": {"dict": {"p":"pineapple", 5:"banana", "a":"apple"}}, "output": False},
            {"input": {"dict": {"Name":"John", "Age":"36", "City":"Houston"}}, "output": False},
            {"input": {"dict": {"STATE":"NC", "ZIP":"12345"}},  "output": True},
            {"input": {"dict": {"fruit":"Orange", "taste":"Sweet"}},  "output": True},
            {"input": {"dict": {}}, "output": False},
        ]
    )
