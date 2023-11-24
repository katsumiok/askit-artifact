# Recompilation count: 0
def every_x1_miles_a_car_64dc9f(x1, x2, x3) -> int:
    # Every 'x1' miles a car drives the tires rotate 'x2' times. Jeremy drives 'x3' miles a month. 
    # If each tire can undergo 10,440,000 rotations how many years before the tire needs to be replaced?

    # Calculate  the total rotations in a month
    rotations_per_month = x2 * x3/x1
    
    #Calculate the total rotations can undergo
    total_rotations_can_undergo = 10_440_000

    #Calculate how many months before need to replace
    months_before_replace = total_rotations_can_undergo / rotations_per_month

    # Convert the months to years by dividing by 12 and return the integer part 
    years_before_replace = int(months_before_replace / 12)

    return years_before_replace