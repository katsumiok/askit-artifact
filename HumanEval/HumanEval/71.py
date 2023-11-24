from typing import List
from pyaskit import defun_hinted, define_hinted

triangle_area = defun_hinted(
    float,
    {'a': float, 'b': float, 'c': float},
    """
    Given the lengths of the three sides of a triangle {{a}}, {{b}} and {{c}}. Return the area of
    the triangle rounded to 2 decimal points if the three sides form a valid triangle. 
    Otherwise return -1
    Three sides make a valid triangle when the sum of any two sides is greater 
    than the third side.
    """,
    training_examples=[
        {"input": {"a": 3, "b": 4, "c": 5}, "output": 6.0},
        {"input": {"a": 1, "b": 2, "c": 10}, "output": -1.0}]
    ).compile(
        test_examples=[
            {"input": {"a": 3, "b": 4, "c": 5}, "output": 6.0},
            {"input": {"a": 1, "b": 2, "c": 10}, "output": -1.0},
            {"input": {"a": 4, "b": 8, "c": 5}, "output": 8.18},
            {"input": {"a": 2, "b": 2, "c": 2}, "output": 1.73},
            {"input": {"a": 1, "b": 2, "c": 3}, "output": -1.0},
            {"input": {"a": 10, "b": 5, "c": 7}, "output": 16.25},
            {"input": {"a": 2, "b": 6, "c": 3}, "output": -1.0},
            {"input": {"a": 1, "b": 1, "c": 1}, "output": 0.43},
            {"input": {"a": 2, "b": 2, "c": 10}, "output": -1.0},]
    )
