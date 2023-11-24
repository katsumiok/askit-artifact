# Recompilation count: 0
from typing import List

def for_each_of_the_group_cc935c(paren_string: str) -> List[int]:
    #  For each of the group in 'paren_string', output the deepest level of nesting of parentheses. 
    groups = paren_string.split(' ')
    result = []
    for group in groups:
        depth = 0
        max_depth = 0
        for char in group:
            if char == '(':
                depth += 1
            if char == ')':
                depth -= 1
            if depth > max_depth:
                max_depth = depth
        result.append(max_depth)
    return result