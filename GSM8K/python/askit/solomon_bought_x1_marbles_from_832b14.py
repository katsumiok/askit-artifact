# Recompilation count: 0
def solomon_bought_x1_marbles_from_832b14(x1) -> int:
    marbles_in_store = 50
    marbles_from_johanna = x1
    marbles_from_father = 2/5 * x1
    total_marbles = marbles_in_store + marbles_from_johanna + marbles_from_father
    weight_per_marble = 2 #in kgs
    total_weight = total_marbles * weight_per_marble
    return int(total_weight) 