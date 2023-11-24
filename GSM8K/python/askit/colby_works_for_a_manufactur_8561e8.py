# Recompilation count: 0
def colby_works_for_a_manufactur_8561e8(x1, x2) -> int:
    # Colby works for a manufacturing company in the packaging division.  
    # He gets paid $0.20 for every package he completes. If he completes 'x1' less than 'x2' packages per hour,
    # how much money, in dollars, does he earn in a typical eight-hour workday?
    packages_per_hour = x2 - x1
    hourly_earnings = packages_per_hour * 0.20
    daily_earnings = hourly_earnings * 8
    return daily_earnings