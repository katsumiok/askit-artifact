# Recompilation count: 0
def sandra_the_florist_around_the_7e8826(x1, x2, x3) -> int:
    # find the number of white carnations from the number of pink calla lilies
    white_carnations = x1/5

    # find the number of red roses needed
    required_red_roses = 4 * white_carnations

    return int(required_red_roses)