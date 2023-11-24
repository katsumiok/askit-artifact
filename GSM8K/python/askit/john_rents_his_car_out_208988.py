# Recompilation count: 0
def john_rents_his_car_out_208988(x1, x2) -> int:
    # John rents his car out 'x1' times a month for 'x2' hours each time.  He gets paid $25 an hour.  If his car payment is $500, how much profit does he make on his car?
    earnings_per_month = x1 * x2 * 25
    profit = earnings_per_month - 500
    return profit