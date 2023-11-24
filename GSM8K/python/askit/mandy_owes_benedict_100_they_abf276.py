# Recompilation count: 0
def mandy_owes_benedict_100_they_abf276(x1) -> int:
    # Mandy owes Benedict $100. They agreed to have monthly interest of 2%. If Mandy was able to pay it after'x1'months, how much should she give to Benedict?
    amount_owed = 100
    interest_rate = 0.02
    for month in range(x1):
        amount_owed += amount_owed * interest_rate
    return int(amount_owed)