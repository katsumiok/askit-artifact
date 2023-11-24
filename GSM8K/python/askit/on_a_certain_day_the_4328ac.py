# Recompilation count: 0
def on_a_certain_day_the_4328ac(x1, x2) -> int:
    # On a certain day, the total cost of filling up'x1'helium balloons was $900.
    # Two days later, the cost of filling each balloon was increased by $20.
    # How much did Bentley pay to fill'x2'balloons if he went to fill them after the price increase?

    # Calculate the original cost of filling each balloon
    original_cost_per_balloon = 900 / x1

    # The cost of filling each balloon was increased by $20
    increased_cost_per_balloon = original_cost_per_balloon + 20

    # Calculate how much Bentley paid
    total_cost = increased_cost_per_balloon * x2

    return total_cost