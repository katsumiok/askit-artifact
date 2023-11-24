# Recompilation count: 0
def jamaal_is_at_the_gym_dec5e6() -> int:
    # Jamaal is at the gym. He has been using an 8-pound weight. He increases the weight that he uses by 50%. It turns out to be too heavy, so he uses a weight two pounds lighter than that. What is the weight, in pounds, that he now uses?
    
    initial_weight = 8
    increased_weight = initial_weight + (initial_weight * 0.50)
    final_weight = increased_weight - 2
    
    return int(final_weight)