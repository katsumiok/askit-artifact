# Recompilation count: 0
def walter_bought_x1_apples_from_a71dff(x1) -> int:
    # Walter bought'x1'apples from the store. He ate 2/5 of them and gave his sister 25% of the remaining number. If he then sold the remaining apples to his uncle at $3 each, how much money did he receive?
    
    # Calculate the apples after Walter ate 2/5 of them
    remaining_apples = x1 - (2/5)*x1
    
    # Calculate the apples after Walter gave 25% of the remaining number to his sister
    remaining_apples_after_giving = remaining_apples - (0.25*remaining_apples)
    
    # Calculate how much money Walter received when he sold the remaining apples to his uncle at $3 each
    money_received = remaining_apples_after_giving*3

    # Return how much money Walter received
    return money_received