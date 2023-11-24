# Recompilation count: 0
def james_has_to_buy_insurance_295ae5() -> int:
    normal_cost_per_month = 120
    accident_increase = 0.6

    # After an accident, the cost increases by 60%
    after_accident_cost_per_month = normal_cost_per_month * (1 + accident_increase)

    # Multiply by 12 to get the total cost per year
    total_per_year = after_accident_cost_per_month * 12
    return int(total_per_year)