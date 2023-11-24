from typing import List
from pyaskit import defun_hinted, define_hinted

encrypt = define_hinted(
    str,
    """
    Takes a string {{s}} as an argument and returns a string encrypted with the alphabet being rotated. 
    The alphabet should be rotated in a manner such that the letters shift down by two multiplied to two places.
    """,
    training_examples=[
        {"input": {"s": 'hi'}, "output": 'lm'},
        {"input": {"s": 'asdfghjkl'}, "output": 'ewhjklnop'},
        {"input": {"s": 'gf'}, "output": 'kj'},
        {"input": {"s": 'et'}, "output": 'ix'}]
    ).compile(
        test_examples=[
            {"input": {"s": 'hi'}, "output": 'lm'},
            {"input": {"s": 'asdfghjkl'}, "output": 'ewhjklnop'},
            {"input": {"s": 'gf'}, "output": 'kj'},
            {"input": {"s": 'et'}, "output": 'ix'},
            {"input": {"s": 'faewfawefaewg'}, "output": 'jeiajeaijeiak'},
            {"input": {"s": 'hellomyfriend'}, "output": 'lippsqcjvmirh'},
            {"input": {"s": 'dxzdlmnilfuhmilufhlihufnmlimnufhlimnufhfucufh'}, "output": 'hbdhpqrmpjylqmpyjlpmlyjrqpmqryjlpmqryjljygyjl'},
            {"input": {"s": 'a'}, "output": 'e'}
        ]
    )
