# Recompilation count: 0
def thomas_withdraws_1000_in_x1_643e6f(x1, x2, x3, x4) -> int:
    # Thomas withdraws $1000 in 'x1' dollar bills from the bank account.
    initial_bills = 1000 / x1

    # He loses 'x2' bills while getting home.
    remaining_bills = initial_bills - x2

    # He uses half of the remaining bills to pay for a bill.
    remaining_bills = remaining_bills / 2

    # Thomas then triples his money.
    remaining_bills = remaining_bills * 3

    # He then converts all his bills to 'x3' dollar bills.
    converted_bills = remaining_bills * (x1 / x3)

    # How many 'x4' dollar bills does he have?
    final_bills = converted_bills / (x4 / x3)

    return int(final_bills)