# Recompilation count: 0
def sarah_has_a_rope_that_71d223(x1) -> int:
    # Sarah has a rope that is'x1'meters long. Her friend wants to buy the rope for $2 a meter. Sarah plans to use the profit to buy a new rope, which at the store costs $1.5 a meter. How much money will she have left over after she buys the new rope?
    money_received = x1 * 2
    cost_new_rope = x1 * 1.5
    money_left = money_received - cost_new_rope
    return money_left