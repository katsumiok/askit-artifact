# Recompilation count: 0
def hannah_slips_on_a_banana_8b2417(x1, x2) -> int:
    # the cost of the cast
    cast_cost = 200
    # the cost of the doctor's visit (since it was 30 minutes, half the hourly rate is charged)
    visit_cost = 300 * 0.5
    # the cost of the painkillers
    painkillers_cost = 4 * x1
    # the cost of parking (the parking time is a mandatory minimum 'x2' hours)
    parking_cost = 6 * x2

    # the total cost is the sum of all the individual costs
    total_cost = cast_cost + visit_cost + painkillers_cost + parking_cost

    return total_cost