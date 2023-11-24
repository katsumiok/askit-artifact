# Recompilation count: 0
def mulan_has_40_her_father_2f7755() -> int:
    # Mulan has $40. Her father gave her $100. She buys two pairs of jeans at $30 each and a bag for $20. How much money does Mulan have left?
    mulan_money = 40
    father_money = 100
    jeans_cost = 2 * 30
    bag_cost = 20

    total_money_left = mulan_money + father_money - jeans_cost - bag_cost

    return total_money_left