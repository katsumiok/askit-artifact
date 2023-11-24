# Recompilation count: 0
def the_recent_floods_in_mamou_af4989(x1, x2, x3) -> int:
    # The recent floods in Mamou’s country have left many families without food or shelter. To help, Mamou has volunteered to distribute 1,360 meals to the affected families. She gave out'x1'meals on Friday,'x2'meals on Saturday, and'x3'meals on Sunday. How many meals does she have left to distribute?
    total_meals = 1360
    distributed_meals = x1 + x2 + x3
    remaining_meals = total_meals - distributed_meals
    return remaining_meals