# Recompilation count: 0
def lucy_sells_apples_from_her_7d1d02(x1) -> int:
    
    # Lucy sells apples for $4 per piece 
    price_per_apple = 4 

    # On Monday, Lucy got $56 from selling apples
    # Therefore, the number of apples she sold on Monday is $56/$4 = 14
    monday_apples = 56 // price_per_apple 

    # On Tuesday, she picked 'x1' apples
    tuesday_apples = x1

    # On Wednesday, Lucy picked double the number of apples she did the previous day
    wednesday_apples = 2 * tuesday_apples 

    # Therefore, the total number of apples picked over the three days is the sum of the apples picked each day
    total_apples = monday_apples + tuesday_apples + wednesday_apples 

    return total_apples