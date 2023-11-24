# Recompilation count: 1
from typing import List, Tuple

def you_are_given_a_2_03832b(lst: List[List[int]], x: int) -> List[Tuple[int, int]]:
    res = []
    for i, inner_lst in enumerate(lst):
        for j in range(len(inner_lst)-1, -1, -1):  # iterating from end to start
            if inner_lst[j] == x:
                res.append((i, j))
    res.sort(key=lambda t: (t[0], -t[1]))  # sorting by rows in ascending and columns in descending order
    return res