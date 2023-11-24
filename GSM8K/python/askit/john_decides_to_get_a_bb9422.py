# Recompilation count: 0
def john_decides_to_get_a_bb9422() -> int:
    # John decides to get a loan by mortgaging his home.  His house is worth $250,000.  He gets a loan worth 40% of that.  He uses 60% of that to pay off his debts.  How much money did he have leftover after paying debt?
    house_worth = 250000
    loan = house_worth * 0.4
    debts = loan * 0.6
    leftover = loan - debts
    return leftover