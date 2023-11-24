from typing import List
from pyaskit import defun_hinted, define_hinted

cycpattern_check = defun_hinted(
    bool,
    {'a': str, 'b': str},
    """You are given 2 words. You need to return True if the second word or any of its rotations is a substring in the first word {{a}} and {{b}}
    """,
    training_examples=[
        {"input": {"a": "abcd", "b": "abd"}, "output": False},
        {"input": {"a": "hello", "b": "ell"}, "output": True},
        {"input": {"a": "whassup", "b": "psus"}, "output": False},
        {"input": {"a": "abab", "b": "baa"}, "output": True},
        {"input": {"a": "efef", "b": "eeff"}, "output": False},
        {"input": {"a": "himenss", "b": "simen"}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"a": "xyzw", "b": "xyw"}, "output": False},
            {"input": {"a": "yello", "b": "ell"}, "output": True},
            {"input": {"a": "whattup", "b": "ptut"}, "output": False},
            {"input": {"a": "efef", "b": "fee"}, "output": True},
            {"input": {"a": "abab", "b": "aabb"}, "output": False},
            {"input": {"a": "winemtt", "b": "tinem"}, "output": True}
        ]
    )
