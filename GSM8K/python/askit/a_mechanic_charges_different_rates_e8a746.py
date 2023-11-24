# Recompilation count: 0
def a_mechanic_charges_different_rates_e8a746(x1, x2, x3) -> int:
    # A mechanic charges different rates to repair the tires of trucks and cars.  
    # For each truck tire that is repaired, the mechanic will charge $60 and for each car tire that is repaired, the mechanic will charge $40.  
    # On Thursday, the mechanic repairs'x1'truck tires and'x2'car tires.  
    # On Friday, the mechanic repairs'x3'car tries and doesn't repair any truck tires.  
    # How much more revenue did the mechanic earn on the day with higher revenue?

    thursday_revenue = x1 * 60 + x2 * 40
    friday_revenue = x3 * 40

    return abs(thursday_revenue - friday_revenue)