# Recompilation count: 0
def hunter_counted_x1_cars_packed_bf2936(x1, x2) -> int:
    # Hunter counted'x1'cars packed in their school parking lot when entering class one morning. During the first break, he counted'x2'more cars in the parking lot. When he got out of class for the lunch break, he realized that 1/2 the number of cars in the parking lot had gone. What's the total number of cars he counted during lunch break?
    total_cars_in_the_morning_and_first_break = x1 + x2
    cars_during_lunch_break = total_cars_in_the_morning_and_first_break // 2
    return cars_during_lunch_break