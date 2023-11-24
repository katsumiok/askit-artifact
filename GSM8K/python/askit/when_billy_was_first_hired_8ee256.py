# Recompilation count: 0
def when_billy_was_first_hired_8ee256(x1, x2) -> int:
    billy_starting_salary = 10  # dollars per hour
    sally_starting_salary = billy_starting_salary + 0.50  # dollars per hour

    # Calculate the increased pay for Billy after his raises
    billy_increased_salary = billy_starting_salary
    if x1 > 0:  # if the raise happens (i.e. worked for some months)
        billy_increased_salary += 0.50  # raise after 'x1' months
    billy_increased_salary += 1  # raise after his first anniversary

    # Calculate the total earnings
    billy_earnings = billy_increased_salary * x2
    sally_earnings = sally_starting_salary * x2

    return billy_earnings - sally_earnings