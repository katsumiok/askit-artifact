from typing import List
from pyaskit import defun_hinted, define_hinted

any_int = defun_hinted(
    bool,
    {'x': int, 'y': int, 'z': int},
    """
    Create a function that takes 3 numbers {{x}}, {{y}} and {{z}}.
    Returns true if one of the numbers is equal to the sum of the other two, and all numbers are integers.
    Returns false in any other cases.
    
    Examples
    any_int(5, 2, 7) ➞ True
    
    any_int(3, 2, 2) ➞ False

    any_int(3, -2, 1) ➞ True
    
    any_int(3.6, -2.2, 2) ➞ False
  

    
    """,
    training_examples=[
        {"input": {"x": 5, "y": 2, "z": 7}, "output": True},
        {"input": {"x": 3, "y": 2, "z": 2}, "output": False},
        {"input": {"x": 3, "y": -2, "z": 1}, "output": True},
        {"input": {"x": 3.6, "y": -2.2, "z": 2}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"x": 2, "y": 3, "z": 1}, "output": True},
            {"input": {"x": 2.5, "y": 2, "z": 3}, "output": False},
            {"input": {"x": 1.5, "y": 5, "z": 3.5}, "output": False},
            {"input": {"x": 2, "y": 6, "z": 2}, "output": False},
            {"input": {"x": 4, "y": 2, "z": 2}, "output": True},
            {"input": {"x": 2.2, "y": 2.2, "z": 2.2}, "output": False},
            {"input": {"x": -4, "y": 6, "z": 2}, "output": True},
            {"input": {"x": 2, "y": 1, "z": 1}, "output": True},
            {"input": {"x": 3, "y": 4, "z": 7}, "output": True},
            {"input": {"x": 3.0, "y": 4, "z": 7}, "output": False},
        ]
    )
