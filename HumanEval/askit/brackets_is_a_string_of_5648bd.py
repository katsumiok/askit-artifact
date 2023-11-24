# Recompilation count: 0
def brackets_is_a_string_of_5648bd(brackets: str) -> bool:
    #  brackets is a string of "(" and ")".
    # return True if every opening bracket 'brackets' has a corresponding closing bracket.

    stack = []

    for bracket in brackets:
        if bracket == '(':
            stack.append(bracket)
        elif bracket == ')':
            if not stack:  # if stack == []
                return False
            else:
                stack.pop()
    
    return not stack  # if stack is empty (all brackets have been matched), return True