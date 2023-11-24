# Recompilation count: 0
def colorado_city_uses_40_of_2ea4ce() -> int:
    # Colorado City uses 40% of the water from the Colorado River. 
    # If 80% of that water is used for industrial purposes,
    # what percent of the river's total water is used by the city for non-industrial purposes?
    
    total_city_use = 40   # Colorado City uses 40% of the water
    industrial_use = 80   # 80% of that water is used for industrial purposes
    
    non_industrial_use = total_city_use * (100 - industrial_use) / 100
    
    return non_industrial_use