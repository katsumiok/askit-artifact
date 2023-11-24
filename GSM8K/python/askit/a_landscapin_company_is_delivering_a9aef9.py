# Recompilation count: 0
import math

def a_landscapin_company_is_delivering_a9aef9(x1, x2, x3) -> int:
    # A landscaping company is delivering flagstones to a customer’s yard. Each flagstone weighs'x1'pounds. If the delivery trucks can carry a total weight of'x2'pounds, how many trucks will be needed to transport'x3'flagstones in one trip?
    total_weight = x1 * x3
    trucks_needed = total_weight / x2
    
    # If the division is not exact, we need an additional truck
    if total_weight % x2 != 0:
        trucks_needed += 1

    return int(math.ceil(trucks_needed)) # returns the smallest integer greater than or equal to 'trucks_needed'