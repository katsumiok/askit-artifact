# Recompilation count: 0
def a_local_town_is_expanding_bed677(x1) -> int:
    # A local town is expanding and wants to build several new homes across the next three years. In the first year, they will build'x1'homes. In the next year, they will build three times this many homes. In the third year, they will count how many homes they have built and double the amount. How many homes will the town have built over the next three years?
    
    # In the first year, they will build 'x1' homes. 
    year1 = x1
    # In the next year, they will build three times this many homes. 
    year2 = 3 * x1
    # In the third year, they will count how many homes they have built and double the amount. 
    year3 = 2 * (year1 + year2)

    # Total homes built over the three years are
    total_homes = year1 + year2 + year3

    return total_homes