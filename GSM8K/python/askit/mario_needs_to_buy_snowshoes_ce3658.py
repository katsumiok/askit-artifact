# Recompilation count: 1
def mario_needs_to_buy_snowshoes_ce3658(x1) -> int:
    # Mario needs to buy snowshoes for his 'x1' sled dogs. 
    # Assuming his dogs each has four legs and each pair of snowshoes costs $12.00, 
    # how much will it cost him to buy snowshoes for all of his dogs?
    total_legs = x1 * 4
    total_pairs_of_snowshoes = total_legs // 2
    total_cost = total_pairs_of_snowshoes * 12
    return total_cost