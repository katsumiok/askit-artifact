# Recompilation count: 0
def peter_wants_to_make_different_fb9911(x1, x2, x3, x4, x5, x6) -> int:
    # calculate total amount of water used for giant, medium and small cubes
    total_water_used = x4 * x2 + x5 * x3 + x6 * 0.5
    # calculate and return the leftover water
    return x1 - total_water_used