# Recompilation count: 0
def linus_works_for_a_trading_776c0e(x1, x2) -> int:
    # Linus works for a trading company. He buys a mobile device for $20 and sells it for twice the amount of the original price. If he bought'x1'devices last Monday and'x2'devices last Tuesday, how much profit was he able to earn after selling all the mobile devices he bought last Monday and Tuesday?
    total_devices = x1 + x2
    cost_price = total_devices * 20  # each device costs $20
    selling_price = total_devices * 40  # each device is sold for twice the cost price i.e., $40
    profit = selling_price - cost_price
    return profit