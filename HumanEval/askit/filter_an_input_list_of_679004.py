# Recompilation count: 0
from typing import List


def filter_an_input_list_of_679004(strings: List[str], prefix: str) -> List[str]:
    # Filter an input list of 'strings' only for ones that start with a given 'prefix'.
    
    return [string for string in strings if string.startswith(prefix)]