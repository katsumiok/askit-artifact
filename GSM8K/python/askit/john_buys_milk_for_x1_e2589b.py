# Recompilation count: 0
def john_buys_milk_for_x1_e2589b(x1, x2, x3, x4, x5) -> int:
    # John buys milk for'x1'dollars, eggs for'x2'dollars, light bulbs for'x3'dollars, cups for'x4'dollars, and roach traps for'x5'dollars.  
    # If there is a 10% tax on all non-food items (assuming light bulbs, cups, and roach traps are non-food items) how much did everything cost.
    
    tax_rate = 0.1
    total_cost = x1 + x2 # cost of food items
    total_cost += (1 + tax_rate) * (x3 + x4 + x5) # cost of non-food items with tax
    
    return round(total_cost)