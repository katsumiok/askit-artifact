# Recompilation count: 0
def a_mother_goes_shopping_she_8b9758() -> float:
    # A mother goes shopping. She buys cocoa at $4.20, laundry at $9.45 and a package of pasta at $1.35. She pays $20. How much change does the cashier give back?
    total_costs = 4.2 + 9.45 + 1.35 # the costs of all products
    change_back = 20 - total_costs # the change that the mother gets back
    return round(change_back, 2) # round it to two decimal places for security