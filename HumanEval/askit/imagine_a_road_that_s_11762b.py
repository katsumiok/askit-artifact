# Recompilation count: 0
def imagine_a_road_that_s_11762b(n: int) -> int:
    # The number of collisions is equal to the number of cars going from left to right
    # and right to left, which in this case is 'n' from each side. Hence, it would 
    # equal n*n.
    return n * n