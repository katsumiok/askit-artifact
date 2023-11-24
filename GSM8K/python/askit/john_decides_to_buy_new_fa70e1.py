# Recompilation count: 0
def john_decides_to_buy_new_fa70e1(x1, x2) -> int:
    # John decides to buy new phones for him, his 'x1' kids, and his wife. Each phone after the first 'x2' is half price. If the phone price is $600 how much did he pay for them all?
    phone_price = 600
    total_phone_count = 1 + x1 + 1 # himself, kids and wife
    if total_phone_count <= x2:
        total_price = total_phone_count * phone_price
    else:
        full_price_count = x2
        half_price_count = total_phone_count - x2
        total_price = full_price_count * phone_price + half_price_count * phone_price / 2
    return total_price