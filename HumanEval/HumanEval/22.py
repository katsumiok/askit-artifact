from typing import List, Any
from pyaskit import defun_hinted

filter_integers = defun_hinted(
    List[int],
    {'values': List[Any]},
    """ Filter given list of any python values {{values}} only for integers. """,
    training_examples=[
        {"input": {"values": ['a', 3.14, 5]}, "output": [5]},
        {"input": {"values": [1, 2, 3, 'abc', {}, []]}, "output": [1, 2, 3]}]
    ).compile(
        test_examples=[
            {"input": {"values": []}, "output": []},
            {"input": {"values": [4, {}, [], 23.2, 9, 'adasd']}, "output": [4, 9]},
            {"input": {"values": [3, 'c', 3, 3, 'a', 'b']}, "output": [3, 3, 3]}]
    )
