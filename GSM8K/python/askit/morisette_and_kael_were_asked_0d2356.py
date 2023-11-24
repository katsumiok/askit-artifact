# Recompilation count: 0
def morisette_and_kael_were_asked_0d2356(x1, x2) -> int:
    # Morisette and Kael were asked to bring fruits. Morisette brought'x1'apples and'x2'oranges, while Kael brought twice the amount of apples and half the number of oranges than Morisette. How many fruits do they have in total?
    
    # Kael's fruits
    kael_apples = 2 * x1  # twice the amount of apples
    kael_oranges = 0.5 * x2  # half the number of oranges
    
    # Total fruits
    total_fruits = x1 + x2 + kael_apples + kael_oranges
    
    return int(total_fruits)