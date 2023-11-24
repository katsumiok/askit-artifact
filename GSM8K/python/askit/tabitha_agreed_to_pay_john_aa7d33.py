# Recompilation count: 0
def tabitha_agreed_to_pay_john_aa7d33(x1, x2) -> int:
    # Tabitha agreed to pay John and Jill $10 an hour to help clean out her attic and basement.
    # Jill worked 'x1' hours on Saturday and 'x2' hour on Sunday.
    # John worked twice as long as Jill on Saturday and three times as long as Jill on Sunday.  
    # How much more money did John earn compared to Jill?
    
    jill_total_hours = x1 + x2
    john_total_hours = (2 * x1) + (3 * x2) 

    john_earnings = 10 * john_total_hours
    jill_earnings = 10 * jill_total_hours

    return john_earnings - jill_earnings