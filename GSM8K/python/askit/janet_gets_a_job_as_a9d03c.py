# Recompilation count: 0
def janet_gets_a_job_as_a9d03c(x1) -> int:
    # Janet gets a job as a waitress.  She makes $10 an hour from wages and another $15 an hour from tips.  
    # She wants to save up 20% of the cost of a $10000 car for a downpayment.
    # If she works'x1' hours a week, how many weeks will she need to work to save the down payment?

    hourly_income = 10 + 15 # hourly income from wages and tips
    total_income_per_week = hourly_income * x1 # weekly income
    savings_percentage = 0.2 # 20% saving
    car_price = 10000 # car price
    down_payment = car_price * savings_percentage # down payment for the car
    weeks = down_payment / total_income_per_week # weeks required to save for the down payment
    
    return int(weeks)