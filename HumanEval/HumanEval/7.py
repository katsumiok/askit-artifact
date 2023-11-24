from typing import List
from pyaskit import defun_hinted, define_hinted

filter_by_substring = defun_hinted(
    List[str],
    {'strings': List[str], 'substring': str},
    """ Filter an input list of {{strings}} only for ones that contain given substring {{substring}}
    """,
    training_examples=[
        {"input": {"strings": [], "substring": 'a'}, "output": []},
        {"input": {"strings": ['abc', 'bacd', 'cde', 'array'], "substring": 'a'}, "output": ['abc', 'bacd', 'array']}]
    ).compile(
        test_examples=[
            {"input": {"strings": [], "substring": 'john'}, "output": []},
            {"input": {"strings": ['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], "substring": 'xxx'}, "output": ['xxx', 'xxxAAA', 'xxx']},
            {"input": {"strings": ['xxx', 'asd', 'aaaxxy', 'john doe', 'xxxAAA', 'xxx'], "substring": 'xx'}, "output": ['xxx', 'aaaxxy', 'xxxAAA', 'xxx']},
            {"input": {"strings": ['grunt', 'trumpet', 'prune', 'gruesome'], "substring": 'run'}, "output": ['grunt', 'prune']},]
    )
