from typing import List
from pyaskit import defun_hinted, define_hinted

prime_length = define_hinted(
    bool,
    """
    Function takes a string {{string}} and returns True if the string length is a prime number or False otherwise
    """,
    training_examples=[
        {"input": {"string": 'Hello'}, "output": True},
        {"input": {"string": 'abcdcba'}, "output": True},
        {"input": {"string": 'kittens'}, "output": True},
        {"input": {"string": 'orange'}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"string": 'Hello'}, "output": True},
            {"input": {"string": 'abcdcba'}, "output": True},
            {"input": {"string": 'kittens'}, "output": True},
            {"input": {"string": 'orange'}, "output": False},
            {"input": {"string": 'wow'}, "output": True},
            {"input": {"string": 'world'}, "output": True},
            {"input": {"string": 'MadaM'}, "output": True},
            {"input": {"string": 'Wow'}, "output": True},
            {"input": {"string": ''}, "output": False},
            {"input": {"string": 'HI'}, "output": True},
            {"input": {"string": 'go'}, "output": True},
            {"input": {"string": 'gogo'}, "output": False},
            {"input": {"string": 'aaaaaaaaaaaaaaa'}, "output": False},
            {"input": {"string": 'Madam'}, "output": True},
            {"input": {"string": 'M'}, "output": False},
            {"input": {"string": '0'}, "output": False},
        ]
    )
