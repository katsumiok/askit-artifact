from typing import List
from pyaskit import defun_hinted, define_hinted

compare = defun_hinted(
    List[int],
    {'game': List[int], 'guess': List[int]},
    """You are given two arrays of scores {{game}} and guesses {{guess}} of equal length, where each index shows a match. 
    Return an array of the same length denoting how far off each guess was. If they have guessed correctly,
    the value is 0, and if not, the value is the absolute difference between the guess and the score.
    """,
    training_examples=[
        {"input": {"game": [1,2,3,4,5,1], "guess": [1,2,3,4,2,-2]}, "output": [0,0,0,0,3,3]},
        {"input": {"game": [0,5,0,0,0,4], "guess": [4,1,1,0,0,-2]}, "output": [4,4,1,0,0,6]}
    ]
).compile(
    test_examples=[
        {"input": {"game": [1,2,3,4,5,1], "guess": [1,2,3,4,2,-2]}, "output": [0,0,0,0,3,3]},
        {"input": {"game": [0,0,0,0,0,0], "guess": [0,0,0,0,0,0]}, "output": [0,0,0,0,0,0]},
        {"input": {"game": [1,2,3], "guess": [-1,-2,-3]}, "output": [2,4,6]},
        {"input": {"game": [1,2,3,5], "guess": [-1,2,3,4]}, "output": [2,0,0,1]},
    ]
)
