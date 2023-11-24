# Recompilation count: 0
def roger_goes_to_the_store_24747c(x1) -> int:
    # calculate cost of coffee
    normal_coffee_cost_per_pound = 5
    expensive_coffee_cost_per_pound = normal_coffee_cost_per_pound * 1.2  # 20% more expensive
    total_coffee_cost = expensive_coffee_cost_per_pound * x1 * 7  # week's worth of coffee

    # calculate cost of donut
    donut_cost = 2

    # total cost
    total_cost = total_coffee_cost + donut_cost

    # return total cost
    return total_cost