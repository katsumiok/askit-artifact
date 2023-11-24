# Recompilation count: 0
def mrs_jameson_s_bamboo_in_017b21(x1, x2, x3) -> int:
    # Mrs. Jameson's bamboo in the backyard grows up to 'x1' inches a day. Today, its height is 'x2' feet. In how many days will its height be 'x3' inches?
    current_height_in_inches = x2 * 12 # Since 1 foot = 12 inches
    future_height_in_inches = x3
    
    # Calculate how many inches the bamboo needs to grow
    growth_needed = future_height_in_inches - current_height_in_inches
    
    # Calculate how many days are needed for the bamboo to reach the future height
    days_needed = growth_needed // x1
    if growth_needed % x1 != 0:    # If there is some remainder left, we need an additional day
        days_needed += 1

    return days_needed