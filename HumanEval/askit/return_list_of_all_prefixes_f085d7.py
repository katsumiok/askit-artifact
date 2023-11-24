# Recompilation count: 0
from typing import List

def return_list_of_all_prefixes_f085d7(string: str) -> List[str]:
    #  Return list of all prefixes from shortest to longest of the input string 'string'
    return [string[:i] for i in range(1, len(string)+1)]