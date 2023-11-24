# Recompilation count: 0
def john_s_car_breaks_down_6bc053(x1, x2, x3) -> int:
    # John's car breaks down.  The car weighs'x1'pounds and he has luggage in it weighing'x2'pounds.  
    # He also has his two young children who weigh'x3'pounds each in it.  
    # If the force to move the car is 1% of the weight how much force does he need to push the car?

    total_weight = x1 + x2 + 2 * x3  # total weight in the car
    force = total_weight * 0.01 # calculating the 1% of the weight
    return force