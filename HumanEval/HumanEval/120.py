from typing import List
from pyaskit import defun_hinted, define_hinted

maximum = defun_hinted(
    List[int],
    {'arr': List[int], 'k': int},
    """ Given an array {{arr}} of integers and a positive integer {{k}}, return a sorted list 
    of length {{k}} with the maximum k numbers in {{arr}}.
    Note:
        1. The length of the array will be in the range of [1, 1000].
        2. The elements in the array will be in the range of [-1000, 1000].
        3. 0 <= {{k}} <= len(arr)""",
    training_examples=[
        {"input": {'arr': [-3, -4, 5], 'k': 3}, "output": [-4, -3, 5]},
        {"input": {'arr': [4, -4, 4], 'k': 2}, "output": [4, 4]},
        {"input": {'arr': [-3, 2, 1, 2, -1, -2, 1], 'k': 1}, "output": [2]}
    ]
).compile(
    test_examples=[
        {"input": {'arr': [123, -123, 20, 0 , 1, 2, -3], 'k': 3}, "output": [2, 20, 123]},
        {"input": {'arr': [-123, 20, 0 , 1, 2, -3], 'k': 4}, "output": [0, 1, 2, 20]},
        {"input": {'arr': [5, 15, 0, 3, -13, -8, 0], 'k': 7}, "output": [-13, -8, 0, 0, 3, 5, 15]},
        {"input": {'arr': [-1, 0, 2, 5, 3, -10], 'k': 2}, "output": [3, 5]},
        {"input": {'arr': [1, 0, 5, -7], 'k': 1}, "output": [5]},
        {"input": {'arr': [4, -4], 'k': 2}, "output": [-4, 4]},
        {"input": {'arr': [-10, 10], 'k': 2}, "output": [-10, 10]},
        {"input": {'arr': [1, 2, 3, -23, 243, -400, 0], 'k': 0}, "output": []}]
)
