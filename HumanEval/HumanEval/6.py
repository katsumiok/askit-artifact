from typing import List
from pyaskit import defun_hinted, define_hinted

parse_nested_parens = defun_hinted(
    List[int],
    {'paren_string': str},
    """ For each of the group in {{paren_string}}, output the deepest level of nesting of parentheses. E.g. (()()) has maximum two levels of nesting while ((())) has three. """,
    training_examples=[
        {"input": {"paren_string": '(()()) ((())) () ((())()())'}, "output": [2, 3, 1, 3]}]
    ).compile(
        test_examples=[
            {"input": {"paren_string": '(()()) ((())) () ((())()())'}, "output": [2, 3, 1, 3]},
            {"input": {"paren_string": '() (()) ((())) (((())))'}, "output": [1, 2, 3, 4]},
            {"input": {"paren_string": '(()(())((())))'}, "output": [4]},
        ]
    )
