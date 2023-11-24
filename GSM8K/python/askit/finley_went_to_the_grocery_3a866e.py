# Recompilation count: 0
def finley_went_to_the_grocery_3a866e(x1, x2) -> int:
    # Finley went to the grocery store and bought rice, beans, and pork for use in their home. It took her 'x1' more minutes to cook pork than rice, while beans took half the combined cooking time of pork and rice. If it took her 'x2' minutes to cook rice, how long in minutes did it take to cook all the food?
    pork_cook_time = x2 + x1
    beans_cook_time = 0.5 * (pork_cook_time + x2)
    total_cook_time = x2 + pork_cook_time + beans_cook_time
    return int(total_cook_time)