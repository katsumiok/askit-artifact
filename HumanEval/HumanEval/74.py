from typing import List
from pyaskit import defun_hinted, define_hinted

total_match = defun_hinted(
    List[str],
    {'lst1': List[str], 'lst2': List[str]},
    """  Accepts two lists of strings {{lst1}} and {{lst2}} and returns the list that has
    total number of chars in all the strings of the list less than the other list.
    if the two lists have the same number of chars, return the first list.
    """,
    training_examples=[
        {"input": {"lst1": [], "lst2": []}, "output": []},
        {"input": {"lst1": ['hi', 'admin'], "lst2": ['hI', 'Hi']}, "output": ['hI', 'Hi']},
        {"input": {"lst1": ['hi', 'admin'], "lst2": ['hi', 'hi', 'admin', 'project']}, "output": ['hi', 'admin']},
        {"input": {"lst1": ['hi', 'admin'], "lst2": ['hI', 'hi', 'hi']}, "output": ['hI', 'hi', 'hi']},
        {"input": {"lst1": ['4'], "lst2": ['1', '2', '3', '4', '5']}, "output": ['4']}]
    ).compile(
        test_examples=[
            {"input": {"lst1": [], "lst2": []}, "output": []},
            {"input": {"lst1": ['hi', 'admin'], "lst2": ['hi', 'hi']}, "output": ['hi', 'hi']},
            {"input": {"lst1": ['hi', 'admin'], "lst2": ['hi', 'hi', 'admin', 'project']}, "output": ['hi', 'admin']},
            {"input": {"lst1": ['4'], "lst2": ['1', '2', '3', '4', '5']}, "output": ['4']},
            {"input": {"lst1": ['hi', 'admin'], "lst2": ['hI', 'Hi']}, "output": ['hI', 'Hi']},
            {"input": {"lst1": ['hi', 'admin'], "lst2": ['hI', 'hi', 'hi']}, "output": ['hI', 'hi', 'hi']},
            {"input": {"lst1": ['hi', 'admin'], "lst2": ['hI', 'hi', 'hii']}, "output": ['hi', 'admin']},
            {"input": {"lst1": [], "lst2": ['this']}, "output": []},
            {"input": {"lst1": ['this'], "lst2": []}, "output": []}]
    )
