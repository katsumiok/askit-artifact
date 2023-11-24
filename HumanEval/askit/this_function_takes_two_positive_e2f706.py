# Recompilation count: 0
def this_function_takes_two_positive_e2f706(x: int, y: int) -> int:
    # This function takes two positive numbers 'x' and 'y' and returns the biggest even integer number that is in the range ['x', 'y'] inclusive. If there's no such number, then the function should return -1.

    # Start from the highest number and decrease it until we find an even number or reach the lower limit
    for i in range(y, x-1, -1):
        if i % 2 == 0:
            return i
    return -1