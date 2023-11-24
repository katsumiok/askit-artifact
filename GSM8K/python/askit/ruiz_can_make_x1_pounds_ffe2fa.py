# Recompilation count: 0
def ruiz_can_make_x1_pounds_ffe2fa(x1, x2) -> int:
    # Ruiz can make 'x1' pounds of chocolates in two hours.
    # Marissa makes 3/4 times as many pounds of chocolates in an hour as Ruiz makes in the two hours.
    # If they worked for 'x2' hours in a day, calculate the total amount of chocolate pounds they made together.
    
    ruiz_daily = (x1 / 2) * x2  # Amount Ruiz makes in a day
    marissa_rate = 3/4 * x1  # How much Marissa makes in an hour
    marissa_daily = marissa_rate * x2 # Amount Marissa makes in a day
    
    total = ruiz_daily + marissa_daily
    
    return total