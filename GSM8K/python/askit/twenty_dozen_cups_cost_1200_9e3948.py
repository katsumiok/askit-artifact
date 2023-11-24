# Recompilation count: 0
def twenty_dozen_cups_cost_1200_9e3948() -> int:
    # Twenty dozen cups cost $1200 less than the total cost of half a dozen plates sold at $6000 each.
    # First calculate the cost of half a dozen plates
    half_a_dozen_plates_cost = 6 * 6000  # half a dozen means 6

    # Now, the cost of twenty dozen cups is $1200 less than the cost of half a dozen plates.
    # Twenty dozen means 20*12 = 240
    # So, single cup cost will be (total cups cost)/240
    single_cup_cost = (half_a_dozen_plates_cost - 1200) / 240
    return single_cup_cost