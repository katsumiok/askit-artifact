# Recompilation count: 0
def a_family_of_parents_and_53a508(x1) -> int:
    # A family of parents and a child go to the cinema. The cost of an adult ticket is $12 and a child ticket is $8. 
    # Then they buy 'x1' popcorns for $3 each. How many dollars do they pay in total?
    adult_ticket = 12
    child_ticket = 8
    popcorn_cost = 3
    total_cost = 2 * adult_ticket + child_ticket + x1 * popcorn_cost
    return total_cost