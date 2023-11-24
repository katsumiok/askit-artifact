# Recompilation count: 0
def kimberly_bought_x1_packages_of_c2c4f0(x1, x2, x3, x4) -> int:
    # Kimberly bought'x1'packages of cat food and'x2'packages of dog food. Each package of cat food contained'x3'tins, and each package of dog food contained'x4'tins. How many more tins of cat food than dog food did Kimberly buy?
    cat_food_tins = x1 * x3
    dog_food_tins = x2 * x4
    more_cat_tins = cat_food_tins - dog_food_tins
    return more_cat_tins