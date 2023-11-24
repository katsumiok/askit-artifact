# Recompilation count: 0
def andrea_has_x1_more_apples_dd3e2a(x1, x2, x3) -> int:
    # Andrea has 'x1' more apples than Jamal and half as many bananas as Jamal. 
    # Jamal has 'x2' more bananas than apples. 
    # How many fruits are there if Andrea has 'x3' apples?
    
    # If Andrea has x3 apples, and she has x1 more apples than Jamal
    # Then Jamal has x3-x1 apples
    jamal_apples = x3 - x1

    # Jamal has x2 more bananas than apples
    jamal_bananas = x2 + jamal_apples

    # Andrea has half as many bananas as Jamal
    andrea_bananas = jamal_bananas // 2

    # So, total fruits are the sum of all these
    total_fruits = x3 + jamal_apples + jamal_bananas + andrea_bananas

    return total_fruits