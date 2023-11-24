from typing import List
from pyaskit import defun_hinted, define_hinted

filter_by_prefix = defun_hinted(
    List[str],
    {'strings': List[str], 'prefix': str},
    """
    Filter an input list of {{strings}} only for ones that start with a given {{prefix}}.
    """,
    training_examples=[
        {"input": {"strings": [], "prefix": 'a'}, "output": []},
        {"input": {"strings": ['abc', 'bcd', 'cde', 'array'], "prefix": 'a'}, "output": ['abc', 'array']}
    ]
).compile(
    test_examples=[
        {"input": {"strings": [], "prefix": 'john'}, "output": []},
        {"input": {"strings": ['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], "prefix": 'xxx'}, "output": ['xxx', 'xxxAAA', 'xxx']}
    ]
)
