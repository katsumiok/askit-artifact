# Recompilation count: 0
def cynthia_eats_one_serving_of_52116c(x1, x2) -> int:
    # calculate the number of cartons she needs
    cartons_needed = x2 // x1
    # since she eats one serving every night, she will need another carton if there are any days left over
    if x2 % x1 != 0:
        cartons_needed += 1
    # return the total cost of the cartons
    return cartons_needed * 4