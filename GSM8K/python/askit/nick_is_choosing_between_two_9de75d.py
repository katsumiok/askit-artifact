# Recompilation count: 0
def nick_is_choosing_between_two_9de75d(x1) -> int:
    
    job_A = 15 * x1  # Gross income from job A
    net_pay_A = job_A * 0.8 # After tax net pay from job A (20% tax)

    job_B = 42000  # Gross income from job B
    income_after_property_tax = job_B - 6000  # Income after property tax
    net_pay_B = income_after_property_tax * 0.9  # After tax net pay from job B (10% tax)

    if net_pay_A > net_pay_B:
        return round(net_pay_A - net_pay_B)
    else:
        return round(net_pay_B - net_pay_A)