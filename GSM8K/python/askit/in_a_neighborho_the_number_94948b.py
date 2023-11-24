# Recompilation count: 0
def in_a_neighborho_the_number_94948b() -> int:
    # In a neighborhood, the number of rabbits pets is twelve less than the combined number of pet dogs and cats. If there are two cats for every dog, and the number of dogs is 60, how many pets in total are in the neighborhood?
    num_of_dogs = 60
    num_of_cats = 2 * num_of_dogs
    num_of_rabbits = num_of_cats + num_of_dogs - 12
    total_pets = num_of_dogs + num_of_cats + num_of_rabbits

    return total_pets