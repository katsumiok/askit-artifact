# Recompilation count: 0
def jenny_goes_to_the_florist_c6ada7(x1, x2) -> int:
    
    # The cost of roses if bought individually
    individual_rose_cost = 2 
    # The cost of a dozen roses
    dozen_rose_cost = 15
    # The number of roses in a dozen
    dozen = 12

    # Converting x2 $5 bills to cents (1 dollar = 100 cents)
    total_money = x2 * 5 * 100 

    # We will calculate how many dozens of roses Jenny bought and how many roses remain
    dozens_of_roses_bought = x1//dozen
    remaining_roses = x1%dozen

    # The cost of roses Jenny bought
    total_cost_of_roses = dozens_of_roses_bought*dozen_rose_cost + remaining_roses*individual_rose_cost

    # We will convert total cost of roses to cents
    total_cost_in_cents = total_cost_of_roses * 100

    # We will calculate how many cents remain
    remaining_cents = total_money - total_cost_in_cents

    # Converting cents to quarters (1 quarter = 25 cents)
    remaining_quarters = remaining_cents // 25 
    
    return remaining_quarters