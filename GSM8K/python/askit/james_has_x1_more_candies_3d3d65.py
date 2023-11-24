# Recompilation count: 0
def james_has_x1_more_candies_3d3d65(x1, x2) -> int:
    # James has'x1'more candies than Robert. John has twice as many candies as Robert. If John has'x2'candies, how many more candies does John have than James?
    # If John has x2 candies and he has twice the amount of Robert, Robert will have x2 / 2 candies.
    robert_candies = x2 / 2
    # James has x1 more candies than Robert.
    james_candies = robert_candies + x1
    # The question wants how many more candies does John have than James.
    more_candies = x2 - james_candies
    return more_candies