# Recompilation count: 0
def the_tooth_fairy_left_sharon_e8ef79(x1) -> int:
    # The initial amount for first tooth
    total_amount = 5
    # Amount for next 3 teeth 
    total_amount += 3 * 1
    # For each of the rest 'x1' teeth, the tooth fairy gave Sharon half the amount(0.5$) as Sharon had received for each of the previous three(1$) teeth.
    
    total_amount += x1 * 0.5
    return total_amount