# Recompilation count: 0
def david_has_12_48_and_8f6688(x1) -> int:
    # David has $12.48 and wants to buy 'x1' bolts from a bin at the hardware store. 
    # Each bolt costs $0.03. How much money does David have left after paying for the bolts?
    
    bolt_cost = 0.03
    total_cost = bolt_cost * x1

    money_left = 12.48 - total_cost

    return money_left