# Recompilation count: 0
def stephen_borrowed_300_from_his_e2ddaa(x1) -> int:
    # Stephen borrowed $300 from his sister and promised to return it with an additional 2% of the money he owed. 
    # For'x1'months Stephen will give his sister $25 per month and the remaining amount, 
    # including the interest, will be paid on the twelfth month. How much will Stephen pay in the twelfth month?

    total_amount = 300 * (1 + 0.02) #including 2% interest
    paid_amount = 25 * x1
    
    twelfth_month_payment = total_amount - paid_amount
    
    return twelfth_month_payment