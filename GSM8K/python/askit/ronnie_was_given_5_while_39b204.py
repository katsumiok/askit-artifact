# Recompilation count: 0
def ronnie_was_given_5_while_39b204() -> int:
    # Ronnie was given $5 while Rissa was given thrice as much. After each of them had given an equal amount of money to their little sister, Rissa is left with 4/5 of her money. How much is left in Ronnie's money?

    ronnie_money = 5
    rissa_money = 3 * ronnie_money  # Rissa was given thrice as much

    # After giving to their little sister, Rissa is left with 4/5 of her money
    rissa_left = 4/5 * rissa_money

    # Given amount is the difference between Rissa's initial amount and what's left
    given_amount = rissa_money - rissa_left

    # Remaining money for Ronnie is his initial amount minus the given amount
    ronnie_left = ronnie_money - given_amount

    return int(ronnie_left)