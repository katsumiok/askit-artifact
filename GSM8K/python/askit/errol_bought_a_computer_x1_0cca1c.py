# Recompilation count: 0
def errol_bought_a_computer_x1_0cca1c(x1) -> int:
    # Errol bought a computer,'x1'monitors, and a printer for $2,400. 
    # He paid $400 less for the printer than the computer. If the computer cost $1,100,
    # how much did one monitor cost, in dollars?
    computer_cost = 1100
    printer_cost = computer_cost - 400
    total_cost = 2400
    monitors_total_cost = total_cost - computer_cost - printer_cost
    
    return monitors_total_cost // x1