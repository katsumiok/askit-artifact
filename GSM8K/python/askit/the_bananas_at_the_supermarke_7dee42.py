# Recompilation count: 0
def the_bananas_at_the_supermarke_7dee42(x1, x2) -> int:
    # The bananas at the supermarket cost $0.80 each, or a bunch for $3.00.  Jenny buys'x1'bunches that average'x2'bananas per bunch. How much money, in dollars, did she save by buying the bananas in bunches instead of individually?
    cost_individual = 0.8 * x1 * x2
    cost_bunch = 3.0 * x1
    savings = cost_individual - cost_bunch
    return savings