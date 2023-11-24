# Recompilation count: 0
def a_large_bag_of_starbursts_2e1d48(x1, x2) -> int:
    # A large bag of Starbursts candy has 'x1' pieces of individually wrapped candies. 
    # If this bag has 'x2' red candies, twice that amount of orange candies and half as many yellow candies as red candies,
    # how many candies are pink?
    
    orange_candies = 2 * x2
    yellow_candies = 0.5 * x2
    total_red_orange_yellow = x2 + orange_candies + yellow_candies

    # The remaining candies are pink
    pink_candies = x1 - total_red_orange_yellow
    
    return pink_candies