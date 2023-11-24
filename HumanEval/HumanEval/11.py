from typing import List
from pyaskit import defun_hinted, define_hinted

string_xor = defun_hinted(
    str,
    {'a': str, 'b': str},
    """Input are two strings {{a}} and {{b}} consisting only of 1s and 0s.
    Perform binary XOR on these inputs and return result also as a string.
    """,
    training_examples=[
        {"input": {"a": '010', "b": '110'}, "output": '100'}]
    ).compile(
        test_examples=[
            {"input": {"a": '111000', "b": '101010'}, "output": '010010'},
            {"input": {"a": '1', "b": '1'}, "output": '0'},
            {"input": {"a": '0101', "b": '0000'}, "output": '0101'},]
    )
