from typing import List
from pyaskit import defun_hinted, define_hinted

find_max = define_hinted(
    str,
    """
    Accepts a list of strings {{words}}. The list contains different words.
    Return the word with maximum number
    of unique characters. If multiple strings have maximum number 
    of unique characters, return the one which comes first 
    in lexicographical order.
    """,
    training_examples=[
        {"input": {"words": ["name", "of", "string"]}, "output": "string"},
        {"input": {"words": ["name", "enam", "game"]}, "output": "enam"},
        {"input": {"words": ["aaaaaaa", "bb" ,"cc"]}, "output": "aaaaaaa"}
    ]
).compile(
    test_examples=[
        {"input": {"words": ["name", "of", "string"]}, "output": "string"},
        {"input": {"words": ["name", "enam", "game"]}, "output": "enam"},
        {"input": {"words": ["aaaaaaa", "bb", "cc"]}, "output": "aaaaaaa"},
        {"input": {"words": ["abc", "cba"]}, "output": "abc"},
        {"input": {"words": ["play", "this", "game", "of","footbott"]}, "output": "footbott"},
        {"input": {"words": ["we", "are", "gonna", "rock"]}, "output": "gonna"},
        {"input": {"words": ["we", "are", "a", "mad", "nation"]}, "output": "nation"},
        {"input": {"words": ["this", "is", "a", "prrk"]}, "output": "this"},
        {"input": {"words": ["b"]}, "output": "b"},
        {"input": {"words": ["play", "play", "play"]}, "output": "play"}
    ]
)
