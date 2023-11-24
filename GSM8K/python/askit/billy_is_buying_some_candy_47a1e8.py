# Recompilation count: 0
def billy_is_buying_some_candy_47a1e8(x1) -> int:
    # Billy is buying some candy with $10 his father gave him. The candy costs $1.5 a pound. After buying candy, he takes half his change and spends it on gumballs, which cost $.05 each. If he bought'x1'gumballs, how many pounds of candy did he buy?
    
    # calculate amount of money spent on gumballs
    gumballs_money = x1 * 0.05  
    # calculate total change which is twice the money spent on gumballs
    total_change = 2 * gumballs_money    
    # calculate total money spent on candy i.e., initial money - total change
    candy_money = 10 - total_change  
    # calculate total number of candy pounds bought i.e., total candy money/candy pound price
    candy_pounds = candy_money / 1.5 
    
    return candy_pounds