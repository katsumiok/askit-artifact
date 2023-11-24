# Recompilation count: 0
def john_is_raising_money_for_bbf33b() -> int:
    # John is raising money for a school trip. He has applied for help from the school, which has decided to cover half the cost of the trip. How much money is John missing if he has $50 and the trip costs $300?
    school_covered = 300 / 2
    johns_money = 50
    total_money_needed = 300 - school_covered
    money_missing = total_money_needed - johns_money
    return money_missing