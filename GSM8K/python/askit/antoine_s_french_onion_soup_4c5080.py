# Recompilation count: 0
def antoine_s_french_onion_soup_4c5080(x1, x2, x3) -> int:
    # Antoine's french onion soup recipe calls for'x1'pounds of onions. He likes to double that amount. His soup serves'x2'people.
    # The onions are currently on sale for $2.00 a pound. He also needs'x3'boxes of beef stock, that are also on sale for $2.00 a box.
    # What is the cost per serving? (Round to the nearest integer.)
    
    # Calculate total cost for onions and beef stock
    total_cost = (x1 * 2 * 2) + (x3 * 2)
    
    # Calculate cost per serving and rounding to nearest integer
    cost_per_serving = round(total_cost / x2)

    return cost_per_serving