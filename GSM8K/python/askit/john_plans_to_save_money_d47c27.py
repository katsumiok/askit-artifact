# Recompilation count: 0
def john_plans_to_save_money_d47c27(x1, x2) -> int:
    # John plans to save money from working. He gets paid $2 per hour and works 'x1' hours a day for 'x2' days a week. If he wants to save $80 how many weeks will it take him?
    weekly_salary = x1 * x2 * 2
    weeks = 80 / weekly_salary
    return round(weeks)