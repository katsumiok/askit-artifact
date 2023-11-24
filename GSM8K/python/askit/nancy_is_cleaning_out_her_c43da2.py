# Recompilation count: 0
def nancy_is_cleaning_out_her_c43da2(x1) -> int:
    # Nancy is cleaning out her old woodshed. She saw'x1'spiders, 1/3rd as many millipedes as spiders, and a number of stink bugs equal to twice the number of millipedes minus 12. How many bugs did she count total?
    
    # calculate the number of millipedes as 1/3rd of spiders
    millipedes = x1 / 3
    
    # calculate the number of stink bugs is twice the number of millipedes minus 12 
    stink_bugs = 2 * millipedes - 12
    
    # return the total number of bugs
    return x1 + millipedes + stink_bugs