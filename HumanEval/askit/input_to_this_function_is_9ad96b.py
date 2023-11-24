# Recompilation count: 0
def input_to_this_function_is_9ad96b(paren_string: str) -> List[str]:
    paren_string = paren_string.replace(" ", "")  # remove spaces
    groups = []
    stack = []
    for p in paren_string:
        if p == "(":
            stack.append("")
        else:
            if len(stack) == 1:
                groups.append(f"({stack.pop()})")
            else:
                last_parentheses = stack.pop()
                stack[-1] += f"({last_parentheses})"  # add the last parentheses to the last (
    return groups