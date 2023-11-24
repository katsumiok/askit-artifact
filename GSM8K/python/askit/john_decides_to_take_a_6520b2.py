# Recompilation count: 0
def john_decides_to_take_a_6520b2(x1, x2, x3) -> int:
    # John decides to take a cooking class.  The class meets 'x1' times a week for 'x2' hours each time for 'x3' weeks.  
    # If he learns a new recipe for every 1.5 hours of class time, how many recipes does he learn?
    total_hours = x1 * x2 * x3
    total_recipes = total_hours / 1.5
    return int(total_recipes)