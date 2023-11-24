from typing import List
from pyaskit import defun_hinted, define_hinted

is_nested = define_hinted(
    bool,
    """
    Function take a string {{string}} as input which contains only square brackets.
    The function should return True if and only if there is a valid subsequence of brackets 
    where at least one bracket in the subsequence is nested.
    """,
    training_examples=[
        {"input": {"string": '[[]]'}, "output": True},
        {"input": {"string": '[]]]]]]][[[[[]'}, "output": False},
        {"input": {"string": '[][]'}, "output": False},
        {"input": {"string": '[]'}, "output": False},
        {"input": {"string": '[[][]]'}, "output": True},
        {"input": {"string": '[[]][['}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"string": '[]]]]]]]]]]'}, "output": False},
            {"input": {"string": ''}, "output": False},
            {"input": {"string": '[[[[[[[['}, "output": False},
            {"input": {"string": ']]]]]]]]'}, "output": False},
            {"input": {"string": '[][][[]]'}, "output": True},
            {"input": {"string": '[[]'}, "output": False},
            {"input": {"string": '[]]'}, "output": False}]
    )
