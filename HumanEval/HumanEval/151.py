from typing import List
from pyaskit import defun_hinted, define_hinted

double_the_difference = define_hinted(
    int,
    """
    Given a list of numbers {{lst}}, return the sum of squares of the numbers
    in the list that are odd. Ignore numbers that are negative or not integers.
    If the input list is empty, return 0.
    """,
    training_examples=[
        {"input": {"lst": [1, 3, 2, 0]}, "output": 10},
        {"input": {"lst": [-1, -2, 0]}, "output": 0},
        {"input": {"lst": [9, -2]}, "output": 81},
        {"input": {"lst": [0]}, "output": 0}]
    ).compile(
        test_examples=[
            {"input": {"lst": []}, "output": 0},
            {"input": {"lst": [5, 4]}, "output": 25},
            {"input": {"lst": [0.1, 0.2, 0.3]}, "output": 0},
            {"input": {"lst": [-10, -20, -30]}, "output": 0},
            {"input": {"lst": [-1, -2, 8]}, "output": 0},
            {"input": {"lst": [0.2, 3, 5]}, "output": 34}
        ]
    )

def check(candidate):
    lst = list(range(-99, 100, 2))
    odd_sum = sum([i**2 for i in lst if i%2!=0 and i > 0])
    assert candidate(lst) == odd_sum , "This prints if this assert fails 7 (good for debugging!)"
