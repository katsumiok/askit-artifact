# Recompilation count: 0
def the_marching_band_is_ordering_0214a5() -> int:
    # The marching band is ordering new uniforms. Each uniform comes with a hat that costs $25, a jacket that costs three times as much as the hat, and pants that cost the average of the costs of the hat and jacket. How much does each uniform cost total?

    # cost of hat
    hat = 25
    # cost of jacket (3 times the cost of the hat)
    jacket = 3 * hat
    # cost of pants (average of the hat and jacket costs)
    pants = (hat + jacket) / 2

    # total cost of uniform
    total_cost = hat + jacket + pants

    return int(total_cost)