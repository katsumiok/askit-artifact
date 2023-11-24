# Recompilation count: 0
def davos_bought_x1_shirts_from_d2f15f(x1: int, x2: int) -> int:
    # Davos bought'x1'shirts from the mall that cost $30 each. If he bought them with a 40% discount, how much did Davos pay for the'x2'shirts?
    shirt_price = 30
    discount = 0.4
    total_cost = x1 * shirt_price * (1 - discount)
    davos_paid_for_x2_shirts = total_cost / x1 * x2
    return int(davos_paid_for_x2_shirts)