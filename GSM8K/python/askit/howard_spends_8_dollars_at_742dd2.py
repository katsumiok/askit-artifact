# Recompilation count: 0
def howard_spends_8_dollars_at_742dd2(x1) -> int:
    # Howard spends $8 dollars at the arcade on Monday.
    money_spent_on_monday = 8
    # On Tuesday, he spends twice as much at the arcade as he did on Monday.
    money_spent_on_tuesday = money_spent_on_monday * 2
    # On Wednesday, he spends'x1'times as much at the arcade as he spent on Tuesday.
    money_spent_on_wednesday = money_spent_on_tuesday * x1
    # If he originally had $100, how much money does he have left?
    total_spent = money_spent_on_monday + money_spent_on_tuesday + money_spent_on_wednesday
    initial_money = 100
    money_left = initial_money - total_spent
    return money_left