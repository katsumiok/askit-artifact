# Recompilation count: 0
def brenda_invested_300_into_a_54fe2e(x1) -> int:
    # Brenda invested $300 into a scheme that accumulates simple interest at the rate of three-quarters of the original amount per year. How much in total will she have after 'x1' years?
    original_amount = 300
    interest_rate = 3/4
    total_after_years = original_amount + (original_amount * interest_rate) * x1
    return round(total_after_years)