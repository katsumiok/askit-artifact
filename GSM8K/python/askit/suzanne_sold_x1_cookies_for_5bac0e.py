# Recompilation count: 0
def suzanne_sold_x1_cookies_for_5bac0e(x1, x2) -> int:
    # Suzanne sold'x1'cookies for $1 each and'x2'cupcakes for $4 each. She gave her two sisters $10 each for helping her. How much money does she have left from her earnings?
    total_earned = (x1 * 1) + (x2 * 4)
    money_given_to_sisters = 10 * 2
    money_left = total_earned - money_given_to_sisters
    return money_left