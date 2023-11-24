# Recompilation count: 0
def takes_a_list_of_integers_e3bc20(lst) -> int:
    # Initialize sum variable
    total = 0
    # For every index and value in the list
    for i, val in enumerate(lst):
        # If index is multiple of 4 and not a multiple of 3
        if i % 4 == 0 and i % 3 != 0:
            total += val**3
        # If index is multiple of 3
        elif i % 3 == 0:
            total += val**2
        # If index is not a multiple of 3 or 4
        else: 
            total += val
    return total