# Recompilation count: 0
def jeff_and_brad_are_trying_6bdfd0(x1, x2) -> int:
    # Jeff and Brad are trying to divide'x1'dollars between them. Jeff gets'x2'times as much as Brad. How much does Jeff get in dollars?
    total_ratio = x2 + 1
    jeff_share = x1 * x2 / total_ratio
    return int(jeff_share)