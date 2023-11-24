# Recompilation count: 0
def create_a_function_that_takes_edcd8d(x: int, y: int, z: int) -> bool:
    #Returns true if one of the numbers is equal to the sum of other two and all numbers are integers.
    if isinstance(x, int) and isinstance(y, int) and isinstance(z, int):
        if x + y == z or x + z == y or y + z == x:
            return True
    return False