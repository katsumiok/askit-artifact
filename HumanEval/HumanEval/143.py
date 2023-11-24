from typing import List
from pyaskit import defun_hinted, define_hinted

words_in_sentence = define_hinted(
    str,
    """You are given a string {{sentence}} representing a sentence,
    the sentence contains some words separated by a space,
    and you have to return a string that contains the words from the original sentence,
    whose lengths are prime numbers,
    the order of the words in the new string should be the same as the original one.

    Constraints:
        * 1 <= len({{sentence}}) <= 100
        * {{sentence}} contains only letters
    """,
    training_examples=[
        {"input": {"sentence": "This is a test"}, "output": "is"},
        {"input": {"sentence": "lets go for swimming"}, "output": "go for"}]
    ).compile(
        test_examples=[
            {"input": {"sentence": "This is a test"}, "output": "is"},
            {"input": {"sentence": "lets go for swimming"}, "output": "go for"},
            {"input": {"sentence": "there is no place available here"}, "output": "there is no place"},
            {"input": {"sentence": "Hi I am Hussein"}, "output": "Hi am Hussein"},
            {"input": {"sentence": "go for it"}, "output": "go for it"},
            {"input": {"sentence": "here"}, "output": ""},
            {"input": {"sentence": "here is"}, "output": "is"}]
    )
