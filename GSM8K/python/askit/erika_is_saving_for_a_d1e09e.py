# Recompilation count: 0
def erika_is_saving_for_a_d1e09e() -> int:
    # Erika is saving for a new laptop. The laptop she wants costs $600. The sales assistant told her that if she traded in her old laptop, the price of the new one would be reduced by $200. She thinks this is a good deal and agrees to do it. She already has some savings in her purse, and has also been paid $150 this week for her part-time job. Her mom agrees to give her $80 to help her. If Erika now only needs an extra $50 to buy the laptop, how much money does she have in her purse?
    
    # The total cost of the laptop after trade-in
    laptop_cost = 600 - 200
    
    # Money Erika received from her part-time job and her mom
    received_money = 150 + 80

    # The amount of money in Erika's purse
    purse = laptop_cost - received_money - 50
    
    return purse