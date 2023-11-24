# Recompilation count: 0
def prince_is_a_butcher_he_da83e3(x1) -> int:
    # Prince is a butcher. He sells 15kg of meat every hour he works, and he works'x1' hours a day. His friend Bill gives him a bull that weighs 750kg. How many days will it take Prince to sell the meat from Bill's bull?
    # calculating the total amount of meat Prince can sell in a day
    daily_sale = x1 * 15
    # dividing the total weight of the bull by the daily sale to get the number of days
    days = 750 / daily_sale
    # if the number of days is a decimal, we need to round up because Prince can't sell meat for a fraction of a day
    import math
    return math.ceil(days)