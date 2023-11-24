# Recompilation count: 0
def dr_hugo_grumpus_and_his_73d875(x1, x2, x3) -> int:
    # calculate and return the number of beakers lost by Igor
    number_of_test_tubes = x1 / 2               # half as many test tubes
    number_of_petri_dishes = x3 + 2             # two more than the number of Petri dishes
    total_items_on_bench = 29                   # total number of items on the bench
    
    # The number of beakers on the bench will be the total items on bench - the others
    beakers_on_bench = total_items_on_bench - (number_of_test_tubes + number_of_petri_dishes)
    
    # number of beakers lost will be the initial number of beakers minus those on the bench.
    beakers_lost = x2 - beakers_on_bench

    return int(beakers_lost)