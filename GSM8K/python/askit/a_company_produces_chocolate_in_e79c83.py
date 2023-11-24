# Recompilation count: 0
def a_company_produces_chocolate_in_e79c83(x1) -> int:
    # A company produces chocolate in bars. In one day, it can produce 'x1' bars. 
    # The company sells all the produced bars for $2 per bar. 
    # How much money will the company receive for selling produced chocolate bars during two weeks?
    
    money_per_day = x1 * 2  # Calculate the money earned per day by selling 'x1' bars.
    money_per_two_weeks = money_per_day * 14  # Calculate the money earned in two weeks by multiplying daily earnings by 14 days.
    
    return money_per_two_weeks