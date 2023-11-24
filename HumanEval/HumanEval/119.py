from typing import List
from pyaskit import defun_hinted, define_hinted

match_parens = defun_hinted(
    str,
    {'lst': List[str]},
    """
    You are given a list of two strings {{lst}}, both strings consist of open
    parentheses '(' or close parentheses ')' only.
    Your job is to check if it is possible to concatenate the two strings in
    some order, that the resulting string will be good.
    A string S is considered to be good if and only if all parentheses in S
    are balanced. For example: the string '(())()' is good, while the string
    '())' is not.
    Return 'Yes' if there's a way to make a good string, and return 'No' otherwise.
    """,
    training_examples=[
        {"input": {"lst": ['()(', ')']}, "output": 'Yes'},
        {"input": {"lst": [')', ')']}, "output": 'No'}]
    ).compile(
        test_examples=[
            {"input": {"lst": ['()(', ')']}, "output": 'Yes'},
            {"input": {"lst": [')', ')']}, "output": 'No'},
            {"input": {"lst": ['(()(())', '())())']}, "output": 'No'},
            {"input": {"lst": [')())', '(()()(']}, "output": 'Yes'},
            {"input": {"lst": ['(())))', '(()())((']}, "output": 'Yes'},
            {"input": {"lst": ['()', '())']}, "output": 'No'},
            {"input": {"lst": ['(()(', '()))()']}, "output": 'Yes'},
            {"input": {"lst": ['((((', '((())']}, "output": 'No'},
            {"input": {"lst": [')(()', '(()(']}, "output": 'No'},
            {"input": {"lst": [')(', ')(']}, "output": 'No'},
            {"input": {"lst": ['(', ')']}, "output": 'Yes'},
            {"input": {"lst": [')', '(']}, "output": 'Yes'}
        ]
    )
