# Recompilation count: 0
from typing import List


def flatten_the_multi_dimensiona_array_b91a61(xs) -> List[int]:
    # Flatten the multi-dimensional array 'xs'.
    flat_list = []
    for sublist in xs:
        if isinstance(sublist, list):
            flat_list += flatten_the_multi_dimensiona_array_b91a61(sublist)
        else:
            flat_list.append(sublist)
    return flat_list