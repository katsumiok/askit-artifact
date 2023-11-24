# Recompilation count: 0
def adam_really_wants_to_ride_df3402(x1, x2, x3) -> int:
    # Convert the height required to ride the roller coaster from feet to inches
    required_height_in_inches = x1 * 12

    # Calculate the difference between the required height and Adam's current height
    height_difference = required_height_in_inches - x2
    
    # Calculate how many years it will take for Adam to grow tall enough to ride the roller coaster
    # We use the ceil function to round up to the nearest whole number, since we can't count part of a year
    years_until_ride = -(-height_difference // x3) 

    return years_until_ride