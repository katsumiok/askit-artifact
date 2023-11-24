from typing import List
from pyaskit import defun_hinted, define_hinted

same_chars = defun_hinted(
    bool,
    {'s0': str, 's1': str},
    """
    Check if two words {{s0}} and {{s1}} have the same characters.
    """,
    training_examples=[
        {"input": {"s0": 'eabcdzzzz', "s1": 'dddzzzzzzzddeddabc'}, "output": True},
        {"input": {"s0": 'abcd', "s1": 'dddddddabc'}, "output": True},
        {"input": {"s0": 'dddddddabc', "s1": 'abcd'}, "output": True},
        {"input": {"s0": 'eabcd', "s1": 'dddddddabc'}, "output": False},
        {"input": {"s0": 'abcd', "s1": 'dddddddabce'}, "output": False},
        {"input": {"s0": 'eabcdzzzz', "s1": 'dddzzzzzzzddddabc'}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"s0": 'eabcdzzzz', "s1": 'dddzzzzzzzddeddabc'}, "output": True},
            {"input": {"s0": 'abcd', "s1": 'dddddddabc'}, "output": True},
            {"input": {"s0": 'dddddddabc', "s1": 'abcd'}, "output": True},
            {"input": {"s0": 'eabcd', "s1": 'dddddddabc'}, "output": False},
            {"input": {"s0": 'abcd', "s1": 'dddddddabcf'}, "output": False},
            {"input": {"s0": 'eabcdzzzz', "s1": 'dddzzzzzzzddddabc'}, "output": False},
            {"input": {"s0": 'aabb', "s1": 'aaccc'}, "output": False},
        ]
    )