# Recompilation count: 0
def janeth_borrowed_2000_and_promised_badd20(x1) -> int:
    # Calculate how much Janeth has to return in total first ($2000 + 10% of the amount)
    total_amount = 2000 + (2000 * 0.10)
    
    # Janeth having paid $165 a month for x1 months
    paid_amount = 165 * x1
    
    # The remaining balance
    remaining_balance = total_amount - paid_amount
    
    return remaining_balance