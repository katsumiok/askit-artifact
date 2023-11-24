# Recompilation count: 0
def return_true_if_list_elements_e4f256(l: list) -> bool:
    # Return True if list elements 'l' are monotonically increasing or decreasing.
    if len(l) < 2:
        return True
    # Determine if the list is increasing or decreasing
    increasing = l[1] > l[0]
    for i in range(2, len(l)):
        if increasing:
            if l[i] < l[i - 1]:
                return False
        else:
            if l[i] > l[i - 1]:
                return False
    return True