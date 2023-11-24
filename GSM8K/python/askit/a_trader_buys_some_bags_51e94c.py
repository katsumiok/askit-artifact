# Recompilation count: 0
def a_trader_buys_some_bags_51e94c() -> int:

    cost_price_per_bag = 20
    transport_price_per_bag = 2
    sell_price_per_bag = 30
    total_profit = 400

    """
    We know that:
    total_profit = total_revenue - total_costs, where
    total_revenue = number_of_bags * sell_price_per_bag
    total_costs = number_of_bags * (cost_price_per_bag + transport_price_per_bag)
    
    From that we get:
    total_profit = number_of_bags * sell_price_per_bag - number_of_bags * (cost_price_per_bag + transport_price_per_bag)
    total_profit = number_of_bags * (sell_price_per_bag - cost_price_per_bag - transport_price_per_bag)
    so :
    number_of_bags = total_profit / (sell_price_per_bag - cost_price_per_bag - transport_price_per_bag)
    """

    number_of_bags = total_profit / (sell_price_per_bag - cost_price_per_bag - transport_price_per_bag)

    # As per problem we are selling only whole bags so need to take integer value
    # Also in python3, division gives floating point number. So converting that to integer.

    return int(number_of_bags)