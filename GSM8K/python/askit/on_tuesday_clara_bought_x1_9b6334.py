# Recompilation count: 0
def on_tuesday_clara_bought_x1_9b6334(x1, x2) -> int:
    # On Tuesday, Clara bought'x1'pomegranates at $20 each. At the till she got $2 off because she had a voucher. The next day, the price shot to $30 per fruit, but the store also offered a 10% discount on the total cost. Sheila took advantage of the discount and bought'x2'pomegranates. What is the difference between the final prices paid for the pomegranates on the two days?

    # Calculate the total price on Tuesday
    tuesday_total = x1 * 20 - 2

    # Calculate the total price on Wednesday
    wednesday_total = x2 * 30 * 0.9

    # Return the difference between the prices
    return abs(tuesday_total - wednesday_total)