# Recompilation count: 0
def bob_needs_to_buy_potting_110e04(x1, x2, x3, x4, x5) -> int:
    # calculate the total volume of the beds
    total_volume = x1 * x2 * x3 * x4
    # calculate the number of bags needed
    number_of_bags = total_volume / x5
    # round up the number of bags needed to the next whole number using ceiling division
    number_of_bags = -(-number_of_bags // 1)

    # calculate and return the total cost
    return int(number_of_bags * 12)