# Recompilation count: 0
def in_november_a_toy_was_f17542() -> int:
    # In November, a toy was $40. In December, the price increased by 80%. In January, the price decreased by 50%. What was the price of the toy after it was discounted in January?
    november_price = 40
    december_price = november_price + november_price * 0.8
    january_price = december_price - december_price * 0.5
    return january_price