# Recompilation count: 0
def jamal_s_phone_can_hold_486177(x1, x2, x3) -> int:
    # Jamal's phone can hold 'x1' times more photographs than can Brittany's phone.  
    # The maximum number of photographs that Brittany's phone can hold is 'x2' times more than the number of ducks in Jamal's photograph of the ducks at the zoo.  
    # If Jamal's phone can hold 'x3' photographs, how many ducks can be seen in Jamal's photograph of ducks at the zoo?
    
    # Let's denote the number of photographs Brittany's phone can hold as 'b' and the number of ducks as 'd'
    # From the statement, we have the following equations:
    # b = x3 / x1 (because Jamal's phone can hold x1 times more photographs than Brittany's)
    # b = d * x2 (because the maximum number of photographs that Brittany's phone can hold is 'x2' times more than the number of ducks)
    # From these two equations, we can find the number of ducks as 'd' = b / x2 = (x3 / x1) / x2
    
    return (x3 / x1) / x2