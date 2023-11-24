# Recompilation count: 0
def alfie_the_albatross_flies_x1_8fd28d(x1) -> int:
    # Alfie, the albatross, flies'x1'kilometers every day.  If the circumference of the earth is 40,000 kilometers, how many days will it take Alfie to fly a distance equal to half of the way around the earth?
    half_earth_circumference = 40000 / 2
    days = half_earth_circumference / x1
    return int(days)