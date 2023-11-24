from typing import List
from pyaskit import defun_hinted, define_hinted

strange_sort_list = define_hinted(
    List[int],
    """
    Given list of integers {{lst}}, return list in strange order.
    Strange sorting, is when you start with the minimum value,
    then maximum of the remaining integers, then minimum and so on.
    """,
    training_examples=[
        {"input": {"lst": [1, 2, 3, 4]}, "output": [1, 4, 2, 3]},
        {"input": {"lst": [5, 5, 5, 5]}, "output": [5, 5, 5, 5]},
        {"input": {"lst": []}, "output": []}]
    ).compile(
        test_examples=[
            {"input": {"lst": [1, 2, 3, 4]}, "output": [1, 4, 2, 3]},
            {"input": {"lst": [5, 6, 7, 8, 9]}, "output": [5, 9, 6, 8, 7]},
            {"input": {"lst": [1, 2, 3, 4, 5]}, "output": [1, 5, 2, 4, 3]},
            {"input": {"lst": [5, 6, 7, 8, 9, 1]}, "output": [1, 9, 5, 8, 6, 7]},
            {"input": {"lst": [5, 5, 5, 5]}, "output": [5, 5, 5, 5]},
            {"input": {"lst": []}, "output": []},
            {"input": {"lst": [1,2,3,4,5,6,7,8]}, "output": [1, 8, 2, 7, 3, 6, 4, 5]},
            {"input": {"lst": [0,2,2,2,5,5,-5,-5]}, "output": [-5, 5, -5, 5, 0, 2, 2, 2]},
            {"input": {"lst": [111111]}, "output": [111111]}]
    )
