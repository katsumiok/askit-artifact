# Recompilation count: 0
from typing import List

def this_function_takes_a_list_f83e4c(l: List[int]) -> List[int]:
    even_indices_values = [l[i] for i in range(len(l)) if i % 2 == 0]
    even_indices_values.sort()
    output = []
    for i in range(len(l)):
        if i % 2 == 0:
            output.append(even_indices_values.pop(0))
        else:
            output.append(l[i])
    return output