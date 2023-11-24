# Recompilation count: 0
def a_cat_eats_nine_sausages_a10ccc(x1) -> int:
    # A cat eats nine sausages in'x1'minutes. A dog can eat the same number of sausages in 2/3 the amount of time the cat takes. Calculate the average time the two take the eat the sausages.
    dog_time = (2 / 3) * x1
    average_time = (x1 + dog_time) / 2
    return average_time