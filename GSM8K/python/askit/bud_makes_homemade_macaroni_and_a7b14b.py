# Recompilation count: 0
def bud_makes_homemade_macaroni_and_a7b14b() -> int:
    # Bud makes homemade macaroni and cheese once a week.  The pasta costs $1.00 a box, and he spends $3.00 on cheddar cheese 
    # and twice that amount for the gruyere cheese.  How much money does Bud spend on making macaroni and cheese in one year?
    
    #Cost of pasta per week
    pasta_cost = 1 
    #Cost of cheddar cheese per week
    cheddar_cheese_cost = 3 
    #Cost of gruyere cheese per week, which is twice the cost of cheddar cheese
    gruyere_cheese_cost = 2 * cheddar_cheese_cost 

    #Total cost per week
    weekly_cost = pasta_cost + cheddar_cheese_cost + gruyere_cheese_cost 

    #As there are 52 weeks in a year, the yearly cost would be the weekly cost times 52.
    yearly_cost = weekly_cost * 52 

    return yearly_cost