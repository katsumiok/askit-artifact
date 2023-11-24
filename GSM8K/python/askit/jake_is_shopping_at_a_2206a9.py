# Recompilation count: 0
def jake_is_shopping_at_a_2206a9(x1) -> int:
    # calculation 50% off rate for the every second t-shirt
    half_price_tshirts = x1 // 2
    full_price_tshirts = x1 - half_price_tshirts

    # total price for t-shirts
    tshirt_total = (full_price_tshirts * 8) + (half_price_tshirts * 8 * 0.5)

    # price for shoes with 40% discount
    shoes_discount = 40 / 100 # converting percent to a fraction
    shoes_price = 40 - (40 * shoes_discount)

    # total amount of money spent
    total_spend = tshirt_total + shoes_price
    return int(total_spend)