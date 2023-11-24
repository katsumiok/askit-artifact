# Recompilation count: 0
def a_regular_box_of_x1_f02ad9(x1: int, x2: int) -> int:
    # A regular box of'x1'dishwasher pods costs $12. 
    # There's currently a special size box for the same price that has 20% more pods. 
    # How many dishwashing cycles with the new box can you run for $1 if you use'x2'pod per cycle?

    # calculate the number of pods in the new box (20% more than the regular box)
    new_box_pods = x1 * 1.2

    # calculate how many cycles can be run using the new box
    total_cycles_new_box = new_box_pods / x2

    # calculate how many cycles can be run for $1 (1 cycle costs $12/total_cycles_new_box)
    cycles_per_dollar = 1 / (12 / total_cycles_new_box)

    # we need an integer value so we take the floor of the result (it's impossible to run a fraction of a cycle)
    cycles_per_dollar = int(cycles_per_dollar)

    return cycles_per_dollar