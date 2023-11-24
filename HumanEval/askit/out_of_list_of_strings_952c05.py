# Recompilation count: 0
from typing import Union, List

def out_of_list_of_strings_952c05(strings: List[str]) -> Union[str, None]:
    # 
    # Out of list of strings 'strings', return the longest one.
    # Return the first one in case of multiple strings of the same length.
    # Return None in case the input list is empty.
    
    if not strings:
        return None
    
    max_length = max(len(string) for string in strings)
    for string in strings:
        if len(string) == max_length:
            return string