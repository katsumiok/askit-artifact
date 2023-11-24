# Recompilation count: 0
def a_fruit_vendor_bought_x1_34b3bd(x1) -> int:
    # A fruit vendor bought 'x1' watermelons for $80. He sold all of them at a profit of 25%. How much was each watermelon sold?
    cost_price = 80
    profit = 0.25
    total_price = cost_price + cost_price * profit
    selling_price_per_watermelon = total_price / x1
    return round(selling_price_per_watermelon)