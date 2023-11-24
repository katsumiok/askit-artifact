# Recompilation count: 0
def betsy_and_donovan_made_a_3ce735(x1, x2) -> int:
    # Betsy and Donovan made a meal together. Betsy's part took 'x1' minutes longer 
    # than Donovan's part. The meal was made in 'x2' minutes. 
    # We know that the sum of the time it took for both Betsy and Donovan 
    # is equal to 'x2'. Also, we know that Betsy's time is equal to Donovan's time plus 'x1'.
    # We can represent Donovan's time as 'd', then Betsy's time is 'd + x1'.
    # Therefore, 'd + d + x1 = x2'. So, '2d + x1 = x2'.
    # After some math we find that Donovan's time 'd = (x2 - x1) / 2'
    # And Betsy's time is 'd + x1', pluging in 'd' we find 
    # Betsy's time 'b = (x2 - x1) / 2 + x1 = (x2 + x1) / 2'
    return (x2 + x1) // 2