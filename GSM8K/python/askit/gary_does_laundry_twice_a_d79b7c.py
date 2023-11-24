# Recompilation count: 0
def gary_does_laundry_twice_a_d79b7c(x1) -> int:
    # Gary does laundry twice a week. Each load of laundry uses'x1'gallons of water, and a gallon of water costs $0.15. 
    # How much does Gary spend on water for laundry in a year?
    cost_per_load = x1 * 0.15
    total_cost_per_week = cost_per_load * 2
    total_cost_per_year = total_cost_per_week * 52
    return total_cost_per_year