# Recompilation count: 0
def there_are_currently_x1_red_fbb29b(x1, x2, x3) -> int:
    # There are currently'x1'red balls,'x2'blue balls, and'x3'green balls in the store. 
    # Red balls cost $9, Blue balls cost $5 and green balls cost $3. 
    # How much will the store have received after all the balls are sold?
    
    #Calculate the total money received for each ball 
    total_red = x1 * 9
    total_blue = x2 * 5
    total_green = x3 * 3
    
    # add up all the total amounts
    total_money = total_red + total_blue + total_green 

    return total_money