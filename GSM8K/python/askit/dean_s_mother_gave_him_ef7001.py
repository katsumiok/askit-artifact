# Recompilation count: 0
def dean_s_mother_gave_him_ef7001(x1, x2) -> int:
    # Dean's mother gave him $28 to go to the toy store. Dean bought'x1'toy cars and'x2'teddy bears. Each toy car cost $2 and each teddy bear cost $1. His mother then feels generous and decides to give him an extra $10. How much money does Dean have left?
    total_money = 28 + 10  # total money Dean got
    spent_money = x1*2 + x2*1  # money Dean spent
    return total_money - spent_money