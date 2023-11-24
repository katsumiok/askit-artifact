from typing import List
from pyaskit import defun_hinted, define_hinted

exchange = defun_hinted(
    str,
    {'lst1': List[int], 'lst2': List[int]},
    """
    Takes two lists {{lst1}} and {{lst2}} of numbers, and determines whether it is possible to perform
    an exchange of elements between them to make {{lst1}} a list of only even numbers.
    There is no limit on the number of exchanged elements between {{lst1}} and {{lst2}}.
    If it is possible to exchange elements between the {{lst1}} and {{lst2}} to make
    all the elements of {{lst1}} to be even, return "YES".
    Otherwise, return "NO".
    """,
    training_examples=[
        {"input": {"lst1": [1, 2, 3, 4], "lst2": [1, 2, 3, 4]}, "output": "YES"},
        {"input": {"lst1": [1, 2, 3, 4], "lst2": [1, 5, 3, 4]}, "output": "NO"}
    ]
).compile(
    test_examples=[
        {"input": {"lst1": [1, 2, 3, 4], "lst2": [1, 2, 3, 4]}, "output": "YES"},
        {"input": {"lst1": [1, 2, 3, 4], "lst2": [1, 5, 3, 4]}, "output": "NO"},
        {"input": {"lst1": [1, 2, 3, 4], "lst2": [2, 1, 4, 3]}, "output": "YES"},
        {"input": {"lst1": [5, 7, 3], "lst2": [2, 6, 4]}, "output": "YES"},
        {"input": {"lst1": [5, 7, 3], "lst2": [2, 6, 3]}, "output": "NO"},
        {"input": {"lst1": [3, 2, 6, 1, 8, 9], "lst2": [3, 5, 5, 1, 1, 1]}, "output": "NO"},
        {"input": {"lst1": [100, 200], "lst2": [200, 200]}, "output": "YES"}
    ]
)
