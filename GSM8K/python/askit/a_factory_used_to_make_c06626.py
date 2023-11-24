# Recompilation count: 0
def a_factory_used_to_make_c06626(x1, x2) -> int:
    # A factory used to make tractors, but now makes silos. When they made tractors, they sold'x1'tractors a day and made $100 per tractor. Now, they sell'x2'silos a day, and make $220 per silo. What percentage more are they making per day now?
    tractor_income = x1 * 100
    silo_income = x2 * 220
    
    percentage_increase = ((silo_income - tractor_income) / tractor_income) * 100
    
    return int(percentage_increase)