from typing import List
from pyaskit import defun_hinted, define_hinted


intersperse = defun_hinted(
    List[int],
    {'numbers': List[int], 'delimeter': int},
    """ Insert a number {{delimeter}} between every two consecutive elements of input list {{numbers}}
    """,
    training_examples=[
        {"input": {"numbers": [], "delimeter": 4}, "output": []},
        {"input": {"numbers": [1, 2, 3], "delimeter": 4}, "output": [1, 4, 2, 4, 3]}]
    ).compile(
        test_examples=[
            {"input": {"numbers": [], "delimeter": 7}, "output": []},
            {"input": {"numbers": [5, 6, 3, 2], "delimeter": 8}, "output": [5, 8, 6, 8, 3, 8, 2]},
            {"input": {"numbers": [2, 2, 2], "delimeter": 2}, "output": [2, 2, 2, 2, 2]},
        ]
    )
