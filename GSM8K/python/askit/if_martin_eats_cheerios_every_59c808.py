# Recompilation count: 0
def if_martin_eats_cheerios_every_59c808(x1) -> int:
    # If Martin eats Cheerios every day for breakfast, he'll lose 1.25 pounds/week. 
    # If he eats donuts every day for breakfast, he'll gain 1.75 pounds/week. 
    # What will be the difference in his weight at the end of'x1'weeks between the two breakfast options?

    weight_difference_per_week = 1.75 + 1.25  # weight gain from donuts - weight loss from Cheerios
    total_weight_difference = weight_difference_per_week * x1  # total weight difference over 'x1' weeks
    
    return total_weight_difference