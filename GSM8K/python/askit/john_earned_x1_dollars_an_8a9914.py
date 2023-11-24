# Recompilation count: 0
def john_earned_x1_dollars_an_8a9914(x1, x2, x3, x4, x5, x6, x7) -> int:
    # calculate weekly earnings by multiplying hourly wage by total hours worked
    weekly_earnings = x1 * x2
    # subtract the cost of gas and the amount John wants to deposit in the bank from the weekly earnings
    remaining_balance = weekly_earnings - x3 - x4
    # subtract the total cost of pencils from John's remaining balance
    remaining_balance = remaining_balance - (x6 * x7)
    # determine how many pens John can buy with the remaining balance
    pen_purchases = remaining_balance // x5
    return pen_purchases