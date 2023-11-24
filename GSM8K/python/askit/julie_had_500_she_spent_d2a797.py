# Recompilation count: 0

def julie_had_500_she_spent_d2a797() -> int:
    # Julie had $500. She spent 20% of it on clothes and then 25% of the remaining money on CDs. How much money did Julie have left?
    initial_amount = 500
    amount_after_clothes = initial_amount - (0.20 * initial_amount)
    amount_after_cds = amount_after_clothes - (0.25 * amount_after_clothes)
    return int(amount_after_cds)