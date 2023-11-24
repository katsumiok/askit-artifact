# Recompilation count: 0
def rayna_has_x1_more_dollars_b7ca61(x1) -> int:
    # Rayna has'x1'more dollars than Kassidy, and Kassidy has 3/4 times as much money as Aurelia. If Arelia has $120, how much would each have if they decided to add together their money and share equally among them?
    aurelia_money = 120
    kassidy_money = 3 / 4 * aurelia_money
    rayna_money = kassidy_money + x1
    total_money = aurelia_money + kassidy_money + rayna_money
    return total_money // 3