from typing import List, Tuple
from pyaskit import defun_hinted, define_hinted

get_row = defun_hinted(
    List[Tuple[int, int]],
    {'lst': List[List[int]], 'x': int},
    """ You are given a 2 dimensional data, as a nested lists,
    which is similar to matrix, however, unlike matrices,
    each row may contain a different number of columns.
    Given {{lst}}, and integer {{x}}, find integers {{x}} in the list,
    and return list of tuples, [(x1, y1), (x2, y2) ...] such that
    each tuple is a coordinate - (row, columns), starting with 0.
    Sort coordinates initially by rows in ascending order.
    Also, sort coordinates of the row by columns in descending order. """,
    training_examples=[
        {"input": {"lst": [[1,2,3,4,5,6],[1,2,3,4,1,6],[1,2,3,4,5,1]], "x": 1}, "output": [(0, 0), (1, 4), (1, 0), (2, 5), (2, 0)]},
        {"input": {"lst": [], "x": 1}, "output": []},
        {"input": {"lst": [[], [1], [1, 2, 3]], "x": 3}, "output": [(2, 2)]}
    ]
    ).compile(
        test_examples=[
            {"input": {"lst": [[1,2,3,4,5,6],[1,2,3,4,1,6],[1,2,3,4,5,1]], "x": 1}, "output": [(0, 0), (1, 4), (1, 0), (2, 5), (2, 0)]},
            {"input": {"lst": [[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6],[1,2,3,4,5,6]], "x": 2}, "output": [(0, 1), (1, 1), (2, 1), (3, 1), (4, 1), (5, 1)]},
            {"input": {"lst": [[1,2,3,4,5,6],[1,2,3,4,5,6],[1,1,3,4,5,6],[1,2,1,4,5,6],[1,2,3,1,5,6],[1,2,3,4,1,6],[1,2,3,4,5,1]], "x": 1}, "output": [(0, 0), (1, 0), (2, 1), (2, 0), (3, 2), (3, 0), (4, 3), (4, 0), (5, 4), (5, 0), (6, 5), (6, 0)]},
            {"input": {"lst": [], "x": 1}, "output": []},
            {"input": {"lst": [[1]], "x": 2}, "output": []},
            {"input": {"lst": [[], [1], [1, 2, 3]], "x": 3}, "output": [(2, 2)]}
        ]
    )
