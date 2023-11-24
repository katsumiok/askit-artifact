# Recompilation count: 0
def the_caretaker_of_the_docks_b598cd(x1, x2, x3) -> int:
    # The caretaker of the docks needs to buy some new line. He wants'x1'feet of line for every foot of dock. Right now, there is'x2'feet of dock, and he has'x3'feet of new line. How many feet of line does he need to buy in total?
    
    # Calculate total feet of line needed
    total_needed = x1 * x2
    
    # Subtract the amount of line he already has
    total_needed -= x3
    
    return total_needed