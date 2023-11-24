# Recompilation count: 0
def manolo_bought_five_lollipops_and_dc3cbd(x1, x2) -> int:
    # Manolo bought five lollipops and four candies that cost $3.20. If each lollipop costs $0.40, how much will'x1'lollipops and'x2'candies cost him?
    lollipop_price = 0.40
    candies_total_price_when_five_lollipops = 3.20
    candies_price = candies_total_price_when_five_lollipops - (5 * lollipop_price)
    # Assume number of candies Manolo bought was 4, then find the price for 1 candy
    candy_price = candies_price / 4
    return x1 * lollipop_price + x2 * candy_price