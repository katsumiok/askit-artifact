# Recompilation count: 0
def tom_went_on_a_two_dd0584(x1, x2, x3) -> int:
    # Tom went on a two-week-long trip through Europe. 
    # In the first'x1'days, he traveled'x2'kilometers every day, 
    # and over the next two days, he totaled only 30% of the distance traveled over the first four days. 
    # On the next day, he wasn't traveling at all. 
    # During the second week, he made'x3'kilometers every day. 
    # Total distance Tom made during his two-week-long trip is computed as:
    return x1*x2 + (0.3 * x1 * x2) + 7*x3