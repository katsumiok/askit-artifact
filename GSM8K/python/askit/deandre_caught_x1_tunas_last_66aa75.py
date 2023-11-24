# Recompilation count: 0
def deandre_caught_x1_tunas_last_66aa75(x1, x2, x3, x4) -> int:
    # Deandre caught'x1'tunas last Monday, the first tuna he caught weighs'x2'kilograms, 
    # the second tuna he caught weighs'x3'kilograms, and the last tuna he caught weighs'x4'kilograms. 
    # If a kilogram of tuna costs $0.50, how much will he earn after selling all the tunas to the market?

    total_kg = x2 + x3 + x4
    total_earnings = total_kg * 0.50
    return total_earnings