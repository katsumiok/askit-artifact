from typing import List
from pyaskit import defun_hinted, define_hinted

remove_vowels = defun_hinted(
    List[int],
    {'a': int, 'b': int},
    """Given two positive integers {{a}} and {{b}}, return the even digits between {{a}}
    and {{b}}, in ascending order.
""",
    training_examples=[
        {"input": {'a': 2, 'b': 8}, 'output': [2, 4, 6, 8]},
        {"input": {'a': 8, 'b': 2}, 'output': [2, 4, 6, 8]},
        {"input": {'a': 10, 'b': 14}, 'output': []},
    ]
).compile(
    test_examples=[
        {"input": {'a': 2, 'b': 10}, 'output': [2, 4, 6, 8]},
        {"input": {'a': 10, 'b': 2}, 'output': [2, 4, 6, 8]},
        {"input": {'a': 132, 'b': 2}, 'output': [2, 4, 6, 8]},
        {"input": {'a': 17, 'b': 89}, 'output': []},
    ]
)
