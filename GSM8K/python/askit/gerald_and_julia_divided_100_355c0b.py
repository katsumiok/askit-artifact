# Recompilation count: 0
def gerald_and_julia_divided_100_355c0b() -> int:
    # Gerald and Julia divided $100 in the ratio 3:2.
    total_money = 100    # Total money to be divided
    gerald_ratio = 3    # Gerald's share ratio
    julia_ratio = 2     # Julia's share ratio
    total_ratio = gerald_ratio + julia_ratio # Total ratio
    # Calculate Gerald's share
    gerald_share = (gerald_ratio / total_ratio) * total_money
    # If Gerald spent $10 on a book, then subtract $10 from his share.
    gerald_remaining_money = gerald_share - 10
    # return how much money did he have left
    return int(gerald_remaining_money)