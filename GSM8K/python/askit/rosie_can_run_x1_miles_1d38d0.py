# Recompilation count: 0
def rosie_can_run_x1_miles_1d38d0(x1, x2, x3, x4) -> int:
    # Rosie can run'x1'miles per hour for'x2'hours. After that, she runs'x3'miles per hour. How many miles can she run in'x4'hours?
    if x4 <= x2:
        total_miles = x1 * x4
    else:
        total_miles = x1 * x2 + x3 * (x4 - x2)
    return total_miles