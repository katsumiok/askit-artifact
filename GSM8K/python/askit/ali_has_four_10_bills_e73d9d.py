# Recompilation count: 0
def ali_has_four_10_bills_e73d9d() -> int:
    total_money = 4*10 + 6*20  # total money Ali initially have
    money_after_given_to_sister = total_money / 2  # half of the money given to his sister
    money_spend_on_dinner = 3/5 * money_after_given_to_sister  # 3/5 of money spent on dinner
    remaining_money = money_after_given_to_sister - money_spend_on_dinner  # calculate remaining money after buying dinner
    return int(remaining_money)  # return the amount round down to the nearest integer