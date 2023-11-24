from typing import List
from pyaskit import defun_hinted, define_hinted

select_words = defun_hinted(
    List[str],
    {'s': str, 'n': int},
    """Given a string {{s}} and a natural number {{n}}, returns a list of all words from string {{s}} that contain exactly 
    {{n}} consonants, in order these words appear in the string {{s}}.
    If the string {{s}} is empty then the function should return an empty list.
    Note: you may assume the input string contains only letters and spaces.
    """,
    training_examples=[
        {"input": {"s": "Mary had a little lamb", "n": 4}, "output": ["little"]},
        {"input": {"s": "Mary had a little lamb", "n": 3}, "output": ["Mary", "lamb"]},
        {"input": {"s": "simple white space", "n": 2}, "output": []},
        {"input": {"s": "Hello world", "n": 4}, "output": ["world"]},
        {"input": {"s": "Uncle sam", "n": 3}, "output": ["Uncle"]}]
    ).compile(
        test_examples=[
            {"input": {"s": "Mary had a little lamb", "n": 4}, "output": ["little"]},
            {"input": {"s": "Mary had a little lamb", "n": 3}, "output": ["Mary", "lamb"]},
            {"input": {"s": "simple white space", "n": 2}, "output": []},
            {"input": {"s": "Hello world", "n": 4}, "output": ["world"]},
            {"input": {"s": "Uncle sam", "n": 3}, "output": ["Uncle"]},
            {"input": {"s": "", "n": 4}, "output": []},
            {"input": {"s": "a b c d e f", "n": 1}, "output": ["b", "c", "d", "f"]}]
    )
