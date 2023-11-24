# Recompilation count: 0
from typing import List

def you_re_given_a_list_c44d5e(operations: List[int]) -> bool:
    balance = 0
    for operation in operations:
        balance += operation
        if balance < 0:
            return True
    return False