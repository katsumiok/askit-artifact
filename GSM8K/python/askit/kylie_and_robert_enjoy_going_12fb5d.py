# Recompilation count: 0
def kylie_and_robert_enjoy_going_12fb5d(x1, x2, x3) -> int:
    # Kylie and Robert enjoy going to the beach to collect shells. 
    # On Monday, Kylie collects 'x1' more shells than Robert, who collects 'x2' shells. 
    # On Tuesday, Kylie collects 'x3' times more shells than she did on Monday. 
    # How many shells does Kylie collect on Tuesday?
    
    # First, calculate how many shells Kylie collected on Monday
    monday_shells = x1 + x2
    
    # Then, calculate how many shells she collected on Tuesday
    tuesday_shells = monday_shells * x3
    
    # Return the number of shells Kylie collected on Tuesday
    return tuesday_shells
