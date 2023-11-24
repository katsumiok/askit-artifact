# Recompilation count: 0
def daisy_bought_a_bag_of_e57050(x1, x2, x3) -> int:
    # Daisy bought a bag of potatoes that weighed'x1'pounds. 
    # She also bought a bag of sweet potatoes that weighed'x2'times as much as the potatoes 
    # and a bag of carrots that weighed'x3'pounds fewer than the sweet potatoes. 
    # How many pounds of carrots did Daisy buy?

    # Weight of sweet potatoes
    sweet_potatoes = x1 * x2
    
    # Weight of carrots
    carrots = sweet_potatoes - x3

    return carrots