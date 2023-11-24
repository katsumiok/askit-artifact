# Recompilation count: 0
def isabelle_bought_party_supplies_for_e79219() -> int:
    # Isabelle bought party supplies for her little sister’s birthday party. 
    # She spent $12 on ingredients for the cake, 
    # $43 on birthday presents, 
    # $15 on decorations, 
    # $4 on invitations, 
    # and $22 on goodie bags for the party guests. 
    # She split the cost evenly three ways with her two parents. 
    # How many dollars did each person pay?

    total_cost = 12 + 43 + 15 + 4 + 22
    cost_per_person = total_cost // 3
    return cost_per_person