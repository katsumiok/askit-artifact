from typing import List
from pyaskit import defun_hinted, define_hinted

check_if_last_char_is_a_letter = define_hinted(
    bool,
    """
    Create a function that returns True if the last character
    of a given string {{txt}} is an alphabetical character and is not
    a part of a word, and False otherwise.
    Note: "word" is a group of characters separated by space.
    """,
    training_examples=[
        {"input": {"txt": "apple pie"}, "output": False},
        {"input": {"txt": "apple pi e"}, "output": True},
        {"input": {"txt": "apple pi e "}, "output": False},
        {"input": {"txt": ""}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"txt": "apple"}, "output": False},
            {"input": {"txt": "apple pi e"}, "output": True},
            {"input": {"txt": "eeeee"}, "output": False},
            {"input": {"txt": "A"}, "output": True},
            {"input": {"txt": "Pumpkin pie "}, "output": False},
            {"input": {"txt": "Pumpkin pie 1"}, "output": False},
            {"input": {"txt": ""}, "output": False},
            {"input": {"txt": "eeeee e "}, "output": False},
            {"input": {"txt": "apple pie"}, "output": False},
            {"input": {"txt": "apple pi e "}, "output": False}]
    )
