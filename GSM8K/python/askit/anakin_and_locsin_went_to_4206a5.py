# Recompilation count: 0
def anakin_and_locsin_went_to_4206a5(x1, x2, x3, x4, x5, x6) -> int:
    # Anakin and Locsin went to the beach today. Anakin caught'x1'starfish,'x2'sea horses, and'x3'clownfish. While Locsin caught'x4'fewer starfish than Anakin,'x5'fewer sea horses than Anakin, and'x6'more clownfish than Anakin. How many fish were they able to catch?
    
    anakin_total = x1 + x2 + x3 # total fish Anakin caught
    locsin_total = (x1 - x4) + (x2 - x5) + (x3 + x6) # total fish Locsin caught

    return anakin_total + locsin_total # total fish they caught