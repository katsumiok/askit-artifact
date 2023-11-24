# Recompilation count: 0
def to_make_x1_liter_of_a03074(x1, x2, x3) -> int:
    # To make'x1'liter of juice, Sam needs'x2'kilograms of oranges. Each kilogram of oranges costs $3. How much money would Sam have to spend to make'x3'liters of juice?
    oranges_needed = x2 * x3 / x1
    return oranges_needed * 3