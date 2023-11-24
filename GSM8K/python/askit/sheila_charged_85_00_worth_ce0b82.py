# Recompilation count: 0
def sheila_charged_85_00_worth_ce0b82() -> int:
    # Initial charge
    initial_charge = 85.00
    # Amount returned
    returned_item = 15.00
    # New purchases
    frying_pan = 0.8 * 20.00  # 20% off $20.00
    towels = 0.9 * 30.00  # 10% off $30.00

    # Current balance
    current_balance = initial_charge - returned_item + frying_pan + towels
    # convert double to integer
    current_balance = int(current_balance)

    return current_balance