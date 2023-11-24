# Recompilation count: 1
def if_a_bag_of_marbles_57eda8(x1) -> int:
    # If a bag of marbles costs $20 and the price increases by 20% of the original price every two months, how much would a bag of marbles cost after'x1'months?
    original_price = 20
    price = original_price
    for month in range(1, x1 + 1):
        if month % 2 == 0:
            price += original_price * 0.2
    return int(price)