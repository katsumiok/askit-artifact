# Recompilation count: 3
def the_jumbo_bottle_of_shampoo_32bd5b(x1, x2, x3) -> int:
    # The jumbo bottle of shampoo costs $24.00. The directions say to use'x1'pumps of shampoo and this will give you'x2'washings. If Jackie only uses'x3'pump per wash, how much will each pump cost, in cents?
    total_pumps = x1 * x2
    cost_per_pump = 2400 / total_pumps #convert $24.00 to cents
    return round(cost_per_pump * x3)