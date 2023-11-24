# Recompilation count: 1
def john_plans_to_sell_all_acd27f(x1, x2) -> int:
    # John plans to sell all his toys and use the money to buy video games. He has'x1'lego sets and he sells them for $15 each. He ends up buying'x2'video games for $20 each and has $5 left. How many lego sets does he still have?
    
    # Each lego set is sold for $15. So, the total amount obtained from selling all lego sets is x1*15.
    total_money = x1 * 15

    # Then, he buys x2 video games for $20 each, which cost x2*20 in total.
    # He also has $5 left. So, total_money is the sum of money used to buy video games  (x2*20) and the money left ($5).
    # From this, we can calculate the number of lego sets not sold. We divide it by the price of each lego set ($15) to get the number of sets.
    legos_left = (total_money - x2 * 20 - 5) / 15

    return int(legos_left)