# Recompilation count: 0
def reggie_lynn_and_paisley_ran_0f7eb9(x1, x2, x3) -> int:
    # Reggie, Lynn, and Paisley ran together. Paisley ran 'x1' miles. Reggie ran 'x2' times what Paisley ran and 'x3' miles farther than Lynn. How many miles did Lynn run?
    # If we translate the problem into math, Reggie's run is x2*x1 + x3 and this is equal to Lynn's run.
    # So we just need to calculate x1 * x2 - x3 for the value of Lynn's run. The distance should be integer, so returning the integer value.
    return (x1*x2 - x3)