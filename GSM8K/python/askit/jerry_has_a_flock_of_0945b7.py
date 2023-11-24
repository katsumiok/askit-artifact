# Recompilation count: 0
def jerry_has_a_flock_of_0945b7(x1, x2, x3) -> int:
    
    # To find the number of red chickens, let's say the number of red chicken is x.
    # It's given that Jerry has two more white chickens than red chickens, so the number of white chickens will be x+2.
    # Total eggs collected everyday are x1*number of red chickens (x1*x) + x2*number of white chickens (x2*(x+2)) = x3
    # We can solve this equation for x to find the number of red chickens.
    
    # Here, we will make an educated guess, starting from 1 to maximum of (x3/x1) as it is the maximum possible number of red chickens Jerry can have.
    for red_chickens in range(1, int(x3/x1)+1):
        white_chickens = red_chickens + 2
        
        # Checking if this number of red chickens and white chickens satisfies the total eggs collected a day.
        if(x1 * red_chickens + x2 * white_chickens == x3):
            return red_chickens
    
    # If no solution is found in the range, return -1 indicating there's no viable solution with the given parameters.
    return -1