# Recompilation count: 0
def tom_bought_a_cd_for_af3491() -> int:
    # Tom bought a CD for $4, and a headphone set. In total, he paid $48. How many more CDs would Tom have been able to buy if he had decided not to buy the headphone set?
    total_paid = 48
    price_of_cd = 4
    cost_of_headphone_set = total_paid - price_of_cd
    number_of_cds = cost_of_headphone_set // price_of_cd
    return number_of_cds