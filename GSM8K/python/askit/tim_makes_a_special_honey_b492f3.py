# Recompilation count: 1
def tim_makes_a_special_honey_b492f3(x1, x2, x3, x4) -> int:
    # Each jar cost
    jar_cost = x2 * 6 + 1.5 * 8 + x3 * 10
    
    # Total cost for x4 jars
    total_cost = jar_cost * x4

    # Total sales for x4 jars
    total_sales = x4 * 50

    # Calculate profit
    profit = total_sales - total_cost
    
    return profit