from typing import List
from pyaskit import defun_hinted, define_hinted

is_bored = define_hinted(
    int,
    """
    Takes string {{S}} of words, and counts the number
    of boredoms. A boredom is a sentence that starts with the word "I".
    Sentences are delimited by '.', '?' or '!'.
    """,
    training_examples=[
        {"input": {"S": "Hello world"}, "output": 0},
        {"input": {"S": "The sky is blue. The sun is shining. I love this weather"}, "output": 1}]
    ).compile(
        test_examples=[
            {"input": {"S": "Hello world"}, "output": 0},
            {"input": {"S": "Is the sky blue?"}, "output": 0},
            {"input": {"S": "I love It !"}, "output": 1},
            {"input": {"S": "bIt"}, "output": 0},
            {"input": {"S": "I feel good today. I will be productive. will kill It"}, "output": 2},
            {"input": {"S": "You and I are going for a walk"}, "output": 0},
        ]
    )
