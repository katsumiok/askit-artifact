from typing import List
from pyaskit import defun_hinted, define_hinted

separate_paren_groups = defun_hinted(
    List[str],
    {'paren_string': str},
    """ Input to this function is a string {{paren_string}} containing multiple groups of nested parentheses. Your goal is to
    separate those group into separate strings and return the list of those.
    Separate groups are balanced (each open brace is properly closed) and not nested within each other
    Ignore any spaces in the input string.
    """,
    training_examples=[
        {"input": {"paren_string": '( ) (( )) (( )( ))'}, "output": ['()', '(())', '(()())']}]
    ).compile(
        test_examples=[
            {"input": {"paren_string": '(()()) ((())) () ((())()())'}, "output": ['(()())', '((()))', '()', '((())()())']},
            {"input": {"paren_string": '() (()) ((())) (((())))'}, "output": ['()', '(())', '((()))', '(((())))']},
            {"input": {"paren_string": '(()(())((())))'}, "output": ['(()(())((())))']},
            {"input": {"paren_string": '( ) (( )) (( )( ))'}, "output": ['()', '(())', '(()())']}
        ]
    )
