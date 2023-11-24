# Recompilation count: 0
def rani_has_ten_more_crabs_c79985(x1, x2) -> int:
    # Rani has ten more crabs than Monic, who has 'x1' fewer crabs than Bo. If Bo has 'x2' crabs, calculate the total number of crabs the three have together.
    # calculating the crabs Monic has
    monic_crabs = x2 - x1 
    # calculating the crabs Rani has
    rani_crabs = monic_crabs + 10
    # calculating the total number of crabs
    total_crabs = rani_crabs + monic_crabs + x2 
    return total_crabs