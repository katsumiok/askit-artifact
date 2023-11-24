# Recompilation count: 0
def mike_needed_a_new_pair_47fad8() -> int:
    # calculate the discount
    original_price = 40.0
    discount = 25.0/100.0 * original_price

    # calculate the discounted price
    discounted_price = original_price - discount

    # calculate the amount of money Mike will have left over
    bill = 50.0
    left_over = bill - discounted_price

    # return left_over rounded to the nearest integer
    return round(left_over)