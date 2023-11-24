# Recompilation count: 0
def melissa_works_as_a_pet_69a884(x1, x2, x3, x4) -> int:
    # Melissa works as a pet groomer. This week, she has 'x1' dogs that need to be bathed, 
    # 'x2' cats that need their nails clipped, 'x3' birds that need their wings trimmed, 
    # and 'x4' horses that need to be brushed. 
    # If she splits the grooming jobs evenly over the days, 
    # how many animals will she groom each day of the week?
    total_animals = x1 + x2 + x3 + x4
    animals_per_day = total_animals // 7 # Assuming a week is 7 days
    return animals_per_day