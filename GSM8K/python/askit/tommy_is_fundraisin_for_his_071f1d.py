# Recompilation count: 0
def tommy_is_fundraisin_for_his_071f1d(x1, x2) -> int:
    # Tommy is fundraising for his charity by selling brownies for $3 a slice and cheesecakes for $4 a slice. 
    # If Tommy sells'x1'brownies and'x2'slices of cheesecake, how much money does Tommy raise?

    # Cost of brownie
    brownie_price = 3

    # cost of cheesecake
    cheesecake_price = 4

    total_money_raised = (x1 * brownie_price) + (x2 * cheesecake_price)
    return total_money_raised