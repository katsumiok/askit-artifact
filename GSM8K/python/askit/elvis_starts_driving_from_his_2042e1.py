# Recompilation count: 0
def elvis_starts_driving_from_his_2042e1(x1, x2) -> int:
    # Elvis starts driving from his house and travels west for 'x1' hours.
    # Then he turns around and travels east for 'x2' hours.
    # If he was driving at an average speed of 18mph for both parts of the journey,
    # how far is he from his house now?
    miles_west = x1 * 18
    miles_east = x2 * 18
    distance_from_home = abs(miles_west - miles_east)
    return distance_from_home