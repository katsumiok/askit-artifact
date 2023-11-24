# Recompilation count: 0
def mark_is_trying_to_choose_2f47ed() -> int:
    # cost of the first venue
    cost_first = 200
    # cost of food per person
    cost_food = 5
    # cost of the second venue per person
    cost_second = 25

    # We can setup an equation to help us out: cost_first + cost_food * x = cost_second * x
    # where x is the number of guests. Solving this for x gives us.
    number_of_guests = cost_first / (cost_second - cost_food)
    return round(number_of_guests)