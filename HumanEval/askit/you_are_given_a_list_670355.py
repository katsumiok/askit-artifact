# Recompilation count: 2
from typing import List

def you_are_given_a_list_670355(lst: List[str]) -> str:

    for order in [[0, 1], [1, 0]]:
        test_string = lst[order[0]] + lst[order[1]]
        if is_good(test_string):
            return 'Yes'

    return 'No'


def is_good(s: str) -> bool:

    balance = 0
    
    for character in s:
        if character == '(':
            balance += 1
        elif character == ')':
            if balance == 0:
                return False
            balance -= 1

    return balance == 0