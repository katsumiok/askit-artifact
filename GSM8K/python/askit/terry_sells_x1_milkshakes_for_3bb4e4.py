# Recompilation count: 0
def terry_sells_x1_milkshakes_for_3bb4e4(x1, x2) -> float:
    # Terry sells'x1'milkshakes for $5.50 each, nine burger platters for $11 each and'x2'sodas for $1.50 each. 
    # How much money does he make in total?
    total_milkshake_sales = x1 * 5.5
    total_burger_platter_sales = 9 * 11
    total_soda_sales = x2 * 1.5
    
    total_sales = total_milkshake_sales + total_burger_platter_sales + total_soda_sales
    return total_sales