# Recompilation count: 0
def carrie_was_given_ten_twenties_f4921b(x1) -> int:
    # Carrie was given ten twenties and'x1'quarters by her aunt to use for lunch. 
    # If she spent all the quarters and 3/5 of the twenties, calculate the total amount of money she paid for the lunch.
    total_twenties = 10 * 20 # total amount of twenties in dollars
    total_quarters = x1 * 0.25 # total amount of quarters in dollars
    spent_twenties = total_twenties * (3/5) # amount of twenties spent for lunch
    total_spent = spent_twenties + total_quarters # total money paid for lunch
    return total_spent