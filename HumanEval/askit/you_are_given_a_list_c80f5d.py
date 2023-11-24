# Recompilation count: 0
from typing import Union

def you_are_given_a_list_c80f5d(lst) -> Union[int, None]:
    # Remove duplicates from input list
    lst = list(set(lst))
    # Sort the list in ascending order
    lst.sort()
    # If there is no 2nd smallest element return None else return 2nd smallest element
    return None if len(lst) < 2 else lst[1]