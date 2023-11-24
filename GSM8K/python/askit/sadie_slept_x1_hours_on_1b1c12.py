# Recompilation count: 0
def sadie_slept_x1_hours_on_1b1c12(x1, x2, x3) -> int:
    # Sadie slept'x1'hours on Monday. For the next two days, she slept'x2'hours less, each, because she had to complete some assignments. If the rest of the week she slept'x3'hour more than those two days, how many hours did she sleep in total throughout the week?
    # Calculation: Monday + Tuesday + Wednesday + Thursday + Friday + Saturday + Sunday 
    return x1 + 2*(x1 - x2) + 4*(x1 - x2 + x3) 