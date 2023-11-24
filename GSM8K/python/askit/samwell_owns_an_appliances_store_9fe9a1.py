# Recompilation count: 0
def samwell_owns_an_appliances_store_9fe9a1(x1) -> int:
    # Samwell owns an appliances store. For this week, one-fourth of their sales are smart TVs, one-eighth are analog TVs, and the rest are OLED TVs. If they were able to sell a total of 'x1' TVs, how many OLED TVs were they able to sell?
    
    smart_tv = x1 / 4
    analog_tv = x1 / 8
    oled_tv = x1 - (smart_tv + analog_tv)   # remaining TVs are OLED TVs
    return int(oled_tv)