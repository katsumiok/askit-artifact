from typing import List
from pyaskit import defun_hinted, define_hinted

remove_vowels = define_hinted(
    str,
    """
    Takes string {{text}} and returns string without vowels.
    """,
    training_examples=[
        {"input": {"text": ''}, "output": ''},
        {"input": {"text": "abcdef\nghijklm"}, "output": 'bcdf\nghjklm'},
        {"input": {"text": 'abcdef'}, "output": 'bcdf'},
        {"input": {"text": 'aaaaa'}, "output": ''},
        {"input": {"text": 'aaBAA'}, "output": 'B'},
        {"input": {"text": 'zbcd'}, "output": 'zbcd'}]
    ).compile(
        test_examples=[
            {"input": {"text": ''}, "output": ''},
            {"input": {"text": "abcdef\nghijklm"}, "output": 'bcdf\nghjklm'},
            {"input": {"text": 'fedcba'}, "output": 'fdcb'},
            {"input": {"text": 'eeeee'}, "output": ''},
            {"input": {"text": 'acBAA'}, "output": 'cB'},
            {"input": {"text": 'EcBOO'}, "output": 'cB'},
            {"input": {"text": 'ybcd'}, "output": 'ybcd'}
        ]
    )
