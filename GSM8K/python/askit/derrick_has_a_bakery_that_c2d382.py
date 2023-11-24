# Recompilation count: 0
def derrick_has_a_bakery_that_c2d382(x1) -> int:
    # Derrick has a bakery that makes'x1'dozen doughnuts every day, selling at $2 per doughnut. 
    # How much money does Derrick make in June if he sells all the doughnuts?
    
    number_of_days_in_June = 30
    total_doughnuts_made_in_June = x1 * 12 * number_of_days_in_June  # there are 12 donuts in a dozen
    total_money_made_in_June = total_doughnuts_made_in_June * 2  # each doughnut is sold at $2
    return total_money_made_in_June