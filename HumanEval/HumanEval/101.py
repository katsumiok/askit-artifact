from typing import List
from pyaskit import defun_hinted, define_hinted

words_string = define_hinted(
    List[str],
    """
    You will be given a string {{s}} of words separated by commas or spaces. Your task is
    to split the string into words and return an array of the words.
    """,
    training_examples=[
        {"input": {"s": "Hi, my name is John"}, "output": ["Hi", "my", "name", "is", "John"]},
        {"input": {"s": "One, two, three, four, five, six"}, "output": ["One", "two", "three", "four", "five", "six"]}
    ]
    ).compile(
        test_examples=[
            {"input": {"s": "Hi, my name is John"}, "output": ["Hi", "my", "name", "is", "John"]},
            {"input": {"s": "One, two, three, four, five, six"}, "output": ["One", "two", "three", "four", "five", "six"]},
            {"input": {"s": "Hi, my name"}, "output": ["Hi", "my", "name"]},
            {"input": {"s": "One,, two, three, four, five, six,"}, "output": ["One", "two", "three", "four", "five", "six"]},
            {"input": {"s": ""}, "output": []},
            {"input": {"s": "ahmed     , gamal"}, "output": ["ahmed", "gamal"]}
        ]
    )
