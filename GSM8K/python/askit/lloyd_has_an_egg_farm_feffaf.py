# Recompilation count: 0
def lloyd_has_an_egg_farm_feffaf(x1) -> int:
    # Lloyd has an egg farm. His chickens produce 'x1' eggs per day and he sells them for $2 per dozen. How much does Lloyd make on eggs per week?
    eggs_per_week = x1 * 7 # eggs per week
    dozen_per_week = eggs_per_week / 12 # dozen of eggs per week
    income_per_week = dozen_per_week * 2 # income per week
    return int(income_per_week)