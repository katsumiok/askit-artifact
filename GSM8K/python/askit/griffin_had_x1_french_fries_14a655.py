# Recompilation count: 0
def griffin_had_x1_french_fries_14a655(x1, x2, x3, x4) -> int:
    # Griffin had 'x1' french fries, but Kyle took 'x2' of them.  
    # Billy took twice as many as Kyle.  
    # Ginger gave Griffin a handful of her fries, and then Colby took from Griffin 'x3' less than the number of fries that Kyle had taken.  
    # If in the end Griffin had 'x4' fries, how many fries did Ginger give Griffin?

    # The total number of fries taken from Griffin is 'x2' (Kyle) + 2*'x2' (Billy) + 'x2' - 'x3' (Colby).
    fries_taken = x2 + 2*x2 + (x2 - x3)

    # Griffin's initial number of fries is 'x1', and he ended up with 'x4' fries.
    # Therefore, the number of fries Ginger gave to Griffin is the difference between his final and initial count plus the fries taken from him.
    fries_given_by_ginger = x4 - x1 + fries_taken

    return fries_given_by_ginger