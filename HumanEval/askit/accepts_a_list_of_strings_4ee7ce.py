# Recompilation count: 0
from typing import List

def accepts_a_list_of_strings_4ee7ce(lst: List[str]) -> List[str]:
    # Remove strings with odd lengths
    lst = [string for string in lst if len(string) % 2 == 0]

    # Sort the list by length and alphabetically if words have the same length
    lst.sort(key=lambda x: (len(x), x))

    return lst