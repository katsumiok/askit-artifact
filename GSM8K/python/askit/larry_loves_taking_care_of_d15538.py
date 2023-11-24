# Recompilation count: 0
def larry_loves_taking_care_of_d15538(x1, x2, x3) -> int:
    # Larry loves taking care of animals.  He has'x1'cats.  He has'x2'times as many dogs as cats.  He has'x3'fewer rabbits than dogs.  He has a fish tank with three times the number of fish as rabbits.  He also has a collection of gerbils that's 1/3 the number of fish he has.  How many pets does Larry have?
    cats = x1
    dogs = x1 * x2
    rabbits = dogs - x3
    fish = rabbits * 3
    gerbils = fish // 3  # Assuming a gerbil count must be an integer.
    total_pets = cats + dogs + rabbits + fish + gerbils
    return total_pets