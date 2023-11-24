# Recompilation count: 0
def a_pound_of_almonds_costs_25109d() -> int:
    # A pound of almonds costs $10 while a pound of walnuts costs $15. How much more does it cost for a mixture of 1/2 pound almonds and 1/3 pound walnuts than a mixture of 1/5 pound almonds and 1/3 pound walnuts?

    # calculate the cost for 1/2 pound almonds and 1/3 pound walnuts
    cost1 = (0.5 * 10) + (1/3 * 15)

    # calculate the cost for 1/5 pound almonds and 1/3 pound walnuts
    cost2 = (1/5 * 10) + (1/3 * 15)

    # return the difference
    return cost1 - cost2