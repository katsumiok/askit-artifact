# Recompilation count: 0
def greta_s_paycheck_is_2400_77d3ea() -> int:
    # Greta’s paycheck is $2400.00. She puts 50% of her pay into her retirement account. She then uses 20% of her paycheck to make her monthly car payment. After funding her retirement and paying for her car, how much money does she have left to spend?
    paycheck = 2400.00
    retirement = paycheck * 0.5
    car_payment = paycheck * 0.2
    spent = retirement + car_payment
    remaining = paycheck - spent
    return remaining