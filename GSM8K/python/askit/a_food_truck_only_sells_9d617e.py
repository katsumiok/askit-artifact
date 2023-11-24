# Recompilation count: 0
def a_food_truck_only_sells_9d617e(x1, x2, x3) -> int:
    bread_cost = 3.00 / x1 # cost of bread per sandwich
    condiment_cost = 30.00 / x2 # cost of cheese and condiments per sandwich
    total_cost_per_sandwich = bread_cost + condiment_cost # total cost per sandwich

    income = x3 * 7.00 # total income from selling x3 sandwiches
    expense = x3 * total_cost_per_sandwich # total expense from making x3 sandwiches
    net_profit = income - expense # net profit
    return net_profit