from typing import List, Tuple
from pyaskit import defun_hinted, define_hinted

right_angle_triangle = defun_hinted(
    bool,
    {'a': float, 'b': float, 'c': float},
    """
    Given the lengths of the three sides of a triangle {{a}}, {{b}}, {{c}}. Return True if the three
    sides form a right-angled triangle, False otherwise.
    A right-angled triangle is a triangle in which one angle is right angle or 
    90 degree.
    Example:
    right_angle_triangle(3, 4, 5) == True
    right_angle_triangle(1, 2, 3) == False
    """,
    training_examples=[
        {"input": {"a": 3, "b": 4, "c": 5}, "output": True},
        {"input": {"a": 1, "b": 2, "c": 3}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"a": 3, "b": 4, "c": 5}, "output": True},
            {"input": {"a": 1, "b": 2, "c": 3}, "output": False},
            {"input": {"a": 10, "b": 6, "c": 8}, "output": True},
            {"input": {"a": 2, "b": 2, "c": 2}, "output": False},
            {"input": {"a": 7, "b": 24, "c": 25}, "output": True},
            {"input": {"a": 10, "b": 5, "c": 7}, "output": False},
            {"input": {"a": 5, "b": 12, "c": 13}, "output": True},
            {"input": {"a": 15, "b": 8, "c": 17}, "output": True},
            {"input": {"a": 48, "b": 55, "c": 73}, "output": True},
            {"input": {"a": 1, "b": 1, "c": 1}, "output": False},
            {"input": {"a": 2, "b": 2, "c": 10}, "output": False},
        ]
    )
