# Recompilation count: 0
def marissa_bought_a_ball_at_cd6b98() -> int:
    # initial money that Marissa had
    initial_money = 80

    # price of the ball
    ball_price = 20

    # price of candy bar
    candy_bar_price = 5

    # money left after buying ball
    money_left = initial_money - ball_price

    # amount of candy bars Marissa can buy with the remaining money
    candy_bars = money_left // candy_bar_price

    return candy_bars