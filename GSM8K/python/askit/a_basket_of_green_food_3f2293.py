# Recompilation count: 0
def a_basket_of_green_food_3f2293(x1) -> int:
    # A basket of green food costs $25 and a basket of red food costs $18. If you buy'x1'baskets of green food and red food, how much will you have to pay in total if you get $2 off for each basket of red food?
    green_food_cost = 25
    red_food_cost = 18 - 2  # $2 off for each basket of red food
    
    total_cost = (green_food_cost * x1) + (red_food_cost * x1)

    return total_cost