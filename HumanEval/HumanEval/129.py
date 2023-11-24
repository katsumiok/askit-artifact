from typing import List
from pyaskit import defun_hinted, define_hinted

minPath = defun_hinted(
    List[int],
    {'grid': List[List[int]], 'k': int},
    """
    Given a grid {{grid}} with N rows and N columns (N >= 2) and a positive integer {{k}}, 
    each cell of the grid contains a value. Every integer in the range [1, N * N]
    inclusive appears exactly once on the cells of the grid.

    You have to find the minimum path of length k in the grid. You can start
    from any cell, and in each step you can move to any of the neighbor cells,
    in other words, you can go to cells which share an edge with you current
    cell.
    It is guaranteed that the answer is unique.
    Return an ordered list of the values on the cells that the minimum path go through.
    """,
    training_examples=[
        {"input": {"grid": [[1, 2, 3], [4, 5, 6], [7, 8, 9]], "k": 3}, "output": [1, 2, 1]},
        {"input": {"grid": [[5, 9, 3], [4, 1, 6], [7, 8, 2]], "k": 1}, "output": [1]}
    ]
).compile(
    test_examples=[
        {"input": {"grid": [[1, 2, 3], [4, 5, 6], [7, 8, 9]], "k": 3}, "output": [1, 2, 1]},
        {"input": {"grid": [[5, 9, 3], [4, 1, 6], [7, 8, 2]], "k": 1}, "output": [1]},
        {"input": {"grid": [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], "k": 4}, "output": [1, 2, 1, 2]},
        {"input": {"grid": [[6, 4, 13, 10], [5, 7, 12, 1], [3, 16, 11, 15], [8, 14, 9, 2]], "k": 7}, "output": [1, 10, 1, 10, 1, 10, 1]},
        {"input": {"grid": [[8, 14, 9, 2], [6, 4, 13, 15], [5, 7, 1, 12], [3, 10, 11, 16]], "k": 5}, "output": [1, 7, 1, 7, 1]},
        {"input": {"grid": [[11, 8, 7, 2], [5, 16, 14, 4], [9, 3, 15, 6], [12, 13, 10, 1]], "k": 9}, "output": [1, 6, 1, 6, 1, 6, 1, 6, 1]},
        {"input": {"grid": [[12, 13, 10, 1], [9, 3, 15, 6], [5, 16, 14, 4], [11, 8, 7, 2]], "k": 12}, "output": [1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6]},
        {"input": {"grid": [[2, 7, 4], [3, 1, 5], [6, 8, 9]], "k": 8}, "output": [1, 3, 1, 3, 1, 3, 1, 3]},
        {"input": {"grid": [[6, 1, 5], [3, 8, 9], [2, 7, 4]], "k": 8}, "output": [1, 5, 1, 5, 1, 5, 1, 5]},
        {"input": {"grid": [[1, 2], [3, 4]], "k": 10}, "output": [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]},
        {"input": {"grid": [[1, 3], [3, 2]], "k": 10}, "output": [1, 3, 1, 3, 1, 3, 1, 3, 1, 3]}
    ]
)
