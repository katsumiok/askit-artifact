from typing import List
from pyaskit import defun_hinted, define_hinted

intersection = defun_hinted(
    str,
    {'interval1': tuple, 'interval2': tuple},
    """
    Given two intervals,
    where each interval is a pair of integers. For example, interval = (start, end) = (1, 2).
    The given intervals are closed which means that the interval (start, end)
    includes both start and end.
    For each given interval, it is assumed that its start is less or equal its end.
    Your task is to determine whether the length of intersection of these two 
    intervals {{interval1}} and {{interval2}} is a prime number.
    Example, the intersection of the intervals (1, 3), (2, 4) is (2, 3)
    which its length is 1, which not a prime number.
    If the length of the intersection is a prime number, return "YES",
    otherwise, return "NO".
    If the two intervals don't intersect, return "NO".
    """,
    training_examples=[
        {"input": {"interval1": (1, 2), "interval2": (2, 3)}, "output": "NO"},
        {"input": {"interval1": (-1, 1), "interval2": (0, 4)}, "output": "NO"},
        {"input": {"interval1": (-3, -1), "interval2": (-5, 5)}, "output": "YES"}]
    ).compile(
        test_examples=[
            {"input": {"interval1": (1, 2), "interval2": (2, 3)}, "output": "NO"},
            {"input": {"interval1": (-1, 1), "interval2": (0, 4)}, "output": "NO"},
            {"input": {"interval1": (-3, -1), "interval2": (-5, 5)}, "output": "YES"},
            {"input": {"interval1": (-2, 2), "interval2": (-4, 0)}, "output": "YES"},
            {"input": {"interval1": (-11, 2), "interval2": (-1, -1)}, "output": "NO"},
            {"input": {"interval1": (1, 2), "interval2": (3, 5)}, "output": "NO"},
            {"input": {"interval1": (1, 2), "interval2": (1, 2)}, "output": "NO"},
            {"input": {"interval1": (-2, -2), "interval2": (-3, -2)}, "output": "NO"},
        ]
    )
