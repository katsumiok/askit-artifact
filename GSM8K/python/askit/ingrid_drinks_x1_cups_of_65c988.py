# Recompilation count: 0
def ingrid_drinks_x1_cups_of_65c988(x1, x2, x3) -> int:
    # Ingrid drinks'x1'cups of water every day.  If there are'x2'cups in a gallon, how many gallons of water does she drink in'x3'days?
    total_cups = x1 * x3
    total_gallons = total_cups / x2
    return int(total_gallons)