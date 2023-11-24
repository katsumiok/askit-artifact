from typing import List
from pyaskit import defun_hinted, define_hinted

concatenate = defun_hinted(
    str,
    {'strings': List[str]},
    """
    Concatenate list of strings {{strings}} into a single string
    """,
    training_examples=[
        {"input": {"strings": []}, "output": ''},
        {"input": {"strings": ['a', 'b', 'c']}, "output": 'abc'}]
    ).compile(
        test_examples=[
            {"input": {"strings": []}, "output": ''},
            {"input": {"strings": ['x', 'y', 'z']}, "output": 'xyz'},
            {"input": {"strings": ['x', 'y', 'z', 'w', 'k']}, "output": 'xyzwk'},
        ]
    )
