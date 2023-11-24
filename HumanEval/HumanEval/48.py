from typing import List
from pyaskit import defun_hinted, define_hinted

is_palindrome = defun_hinted(
    bool,
    {'text': str},
    """ Checks if given string {{text}} is a palindrome """,
    training_examples=[
        {"input": {"text": ''}, "output": True},
        {"input": {"text": 'aba'}, "output": True},
        {"input": {"text": 'aaaaa'}, "output": True},
        {"input": {"text": 'zbcd'}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"text": ''}, "output": True},
            {"input": {"text": 'aba'}, "output": True},
            {"input": {"text": 'aaaaa'}, "output": True},
            {"input": {"text": 'zbcd'}, "output": False},
            {"input": {"text": 'xywyx'}, "output": True},
            {"input": {"text": 'xywyz'}, "output": False},
            {"input": {"text": 'xywzx'}, "output": False}]
    )
