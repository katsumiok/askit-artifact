# Recompilation count: 0
def lloyd_earns_10_an_hour_7a79f9(x1, x2) -> int:
    # Lloyd earns $10 an hour on Math tutoring.  He tutored'x1'hours for the first week and'x2'hours for the second week. How much did he earn for the first two weeks?
    pay_rate = 10
    total_hours = x1 + x2
    earnings = pay_rate * total_hours
    return earnings