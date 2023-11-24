# Recompilation count: 0
def john_wins_an_award_at_1d6d8f(x1, x2) -> int:
    # John wins an award at work.  The award has a 'x1' time monetary reward of $5000 
    # and a 5% raise in salary. If he makes 'x2' a week, every week of the year and he 
    # got the award on the first day of the year how much money did he make that year?
    award_money = x1 * 5000
    salary_without_raise = x2 * 52
    salary_with_raise = salary_without_raise * 1.05
    total_money = award_money + salary_with_raise
    return int(total_money)