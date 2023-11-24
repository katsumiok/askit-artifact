# Recompilation count: 0
def a_farmer_extracts_x1_liters_044469(x1, x2, x3) -> int:
    # A farmer extracts'x1'liters of milk a day from a cow. Since he has'x2'cows, how many more cows does he need to have to produce'x3'liters of milk a day?
    current_production = x1 * x2
    required_cows = x3 // x1
    if x3 % x1 != 0:
        required_cows += 1
    return required_cows - x2 if required_cows > x2 else 0