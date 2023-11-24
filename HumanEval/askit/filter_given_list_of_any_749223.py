# Recompilation count: 0
from typing import List

def filter_given_list_of_any_749223(values: List[None]) -> List[int]:
    #  Filter given list of any python values 'values' only for integers. 
    return [value for value in values if type(value) == int]
