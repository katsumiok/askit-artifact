from typing import List
from pyaskit import defun_hinted, define_hinted

max_fill = defun_hinted(
    int,
    {'grid': List[List[int]], 'capacity': int},
    """
    Given a rectangular grid of wells where each row represents a single well, and each 1 in a row represents a single unit of water. Each well has a corresponding bucket to extract water from it, and all buckets have the same {{capacity}}. Your task is to use the buckets to empty the wells.
    Output is the number of times you need to lower the buckets.
    """,
    training_examples=[
        {"input": {"grid": [[0,0,1,0], [0,1,0,0], [1,1,1,1]], "capacity": 1}, "output": 6},
        {"input": {"grid": [[0,0,1,1], [0,0,0,0], [1,1,1,1], [0,1,1,1]], "capacity": 2}, "output": 5},
        {"input": {"grid": [[0,0,0], [0,0,0]], "capacity": 5}, "output": 0}]
    ).compile(
        test_examples=[
            {"input": {"grid": [[0,0,1,0], [0,1,0,0], [1,1,1,1]], "capacity": 1}, "output": 6},
            {"input": {"grid": [[0,0,1,1], [0,0,0,0], [1,1,1,1], [0,1,1,1]], "capacity": 2}, "output": 5},
            {"input": {"grid": [[0,0,0], [0,0,0]], "capacity": 5}, "output": 0},
            {"input": {"grid": [[1,1,1,1], [1,1,1,1]], "capacity": 2}, "output": 4},
            {"input": {"grid": [[1,1,1,1], [1,1,1,1]], "capacity": 9}, "output": 2},]
    )
