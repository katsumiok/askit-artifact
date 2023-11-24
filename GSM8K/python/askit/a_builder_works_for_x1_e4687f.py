# Recompilation count: 0
def a_builder_works_for_x1_e4687f(x1, x2) -> int:
    # A builder works for'x1'weeks every month and for'x2'days every week. If he gets paid $50 every day, how much does he earn if he works for a year?
    total_days = x1 * x2 * 12 # total number of days he works in a year
    total_earnings = total_days * 50 # total earnings in a year
    return total_earnings