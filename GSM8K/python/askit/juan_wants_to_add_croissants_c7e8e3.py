# Recompilation count: 1
def juan_wants_to_add_croissants_c7e8e3(x1, x2) -> int:
    # Juan wants to add croissants to his bakery menu.  
    # It takes 1/4 pound of butter to make 'x1' dozen croissants. 
    # He wants to start with making 'x2' dozen a day for a week.  
    # How many pounds of butter will he need to make these croissants?

    # To calculate the total butter needed, we first need to calculate the butter requirement per day (x1*1/4) 
    # and then multiply it by the number of days (x2*7).
    butter_needed = (x1 * 0.25) * (x2 * 7)
    return butter_needed