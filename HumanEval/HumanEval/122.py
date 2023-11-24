from typing import List
from pyaskit import defun_hinted, define_hinted


add_elements = defun_hinted(
    int,
    {'arr': List[int], 'k': int},
    """
 Given a non-empty array of integers {{arr}} and an integer {{k}}, return
 the sum of the elements with at most two digits from the first {{k}} elements of {{arr}}.

 Constraints:
   1. 1 <= len({{arr}}) <= 100
   2. 1 <= {{k}} <= len({{arr}})
 """,
    training_examples=[] # There are no training examples given
).compile(
    test_examples=[
        {"input": {"arr": [1,-2,-3,41,57,76,87,88,99], "k": 3}, "output": -4},
        {"input": {"arr": [111,121,3,4000,5,6], "k": 2}, "output": 0},
        {"input": {"arr": [11,21,3,90,5,6,7,8,9], "k": 4}, "output": 125},
        {"input": {"arr": [111,21,3,4000,5,6,7,8,9], "k": 4}, "output": 24},
        {"input": {"arr": [1], "k": 1}, "output": 1}
    ]
)
