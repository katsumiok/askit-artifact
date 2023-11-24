# Recompilation count: 0
def matteo_traveled_at_x1_miles_28271b(x1, x2, x3, x4) -> int:
    # Matteo traveled at'x1'miles per hour for'x2'hours.
    # Shandy traveled at'x3'miles per hour for'x4'hours.
    # How many miles farther did Shandy drive than Matteo?
    
    matteo_distance = x1 * x2
    shandy_distance = x3 * x4
    return shandy_distance - matteo_distance