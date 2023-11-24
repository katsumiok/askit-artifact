# Recompilation count: 0
from typing import List

def filter_an_input_list_of_7f62ce(strings: List[str], substring: str) -> List[str]:
    #  Filter an input list of 'strings' only for ones that contain given substring 'substring'
    return [string for string in strings if substring in string]