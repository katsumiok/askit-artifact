# Recompilation count: 3
def function_take_a_string_string_cf8c76(string) -> bool:
    depth = 0
    has_nested = False
    for i in string:
        if i == "[":
            depth += 1
        elif i == "]":
            depth -= 1
        if depth > 1:
            has_nested = True
        if depth < 0: 
            return False
    if depth != 0:
        return False
    return has_nested