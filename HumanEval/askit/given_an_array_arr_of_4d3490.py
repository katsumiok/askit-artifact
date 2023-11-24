# Recompilation count: 3
from typing import Union
from functools import reduce

def given_an_array_arr_of_4d3490(arr) -> Union[int, None]:
    if not arr:
        return None

    signs = [0 if i==0 else (-1 if i<0 else 1) for i in arr]
    magnitudes = [abs(i) for i in arr]

    product_of_signs = reduce((lambda x, y: x * y), signs)
    sum_of_magnitudes = sum(magnitudes)

    return product_of_signs * sum_of_magnitudes