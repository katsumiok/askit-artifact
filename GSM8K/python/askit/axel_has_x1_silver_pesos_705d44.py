# Recompilation count: 0
def axel_has_x1_silver_pesos_705d44(x1, x2, x3) -> int:
    # Axel has'x1'silver pesos and'x2'gold pesos. He visits her friend Anna who has twice as many silver pesos as he has and'x3'more gold pesos. What's the total number of pesos they have together?
    # Anna's silver pesos
    anna_silver = 2 * x1

    # Anna's gold pesos
    anna_gold = x2 + x3

    # Total silver and gold pesos they both have
    total_silver_gold = x1 + x2 + anna_silver + anna_gold

    return total_silver_gold