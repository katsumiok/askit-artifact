# Recompilation count: 0
def jamaar_loves_fresh_fruit_and_d9b6d4(x1, x2, x3, x4) -> int:
    # Define the cost of each type of fruit
    peach_cost = 0.5
    pear_cost = 0.5
    kiwi_cost = 1
    apple_cost = 0.75
    plum_cost = 0.25
    
    # Calculate the total cost of the fruits Jamaar has already purchased
    total_cost = (x1 * peach_cost) + (x2 * pear_cost) + (x3 * kiwi_cost) + (x4 * apple_cost)

    # Calculate the remaining money Jamaar has
    remaining_money = 10 - total_cost

    # Calculate how many plums Jamaar can buy with the remaining_money
    number_of_plums = int(remaining_money / plum_cost)

    return number_of_plums