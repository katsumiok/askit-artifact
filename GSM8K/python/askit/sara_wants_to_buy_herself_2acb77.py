# Recompilation count: 0
def sara_wants_to_buy_herself_2acb77(x1, x2) -> int:
    jacket_price = 30
    shoes_price = 20

    babysit_earnings = 5
    mowing_earnings = 4

    initial_savings = 10

    total_needed = jacket_price + x1 * shoes_price
    total_earned_from_babysitting = x2 * babysit_earnings

    remaining_needed = total_needed - total_earned_from_babysitting - initial_savings

    return remaining_needed // mowing_earnings if remaining_needed % mowing_earnings == 0 else (remaining_needed // mowing_earnings) + 1