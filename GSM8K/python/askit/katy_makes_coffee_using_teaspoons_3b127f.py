# Recompilation count: 0
def katy_makes_coffee_using_teaspoons_3b127f(x1) -> int:
    # Katy makes coffee using teaspoons of sugar and cups of water in the ratio of 7:13. If she used a total of 'x1' teaspoons of sugar and cups of water, calculate the number of teaspoonfuls of sugar she used.
    # Let's denote the amount of sugar as 's' and the amount of water as 'w'.
    # Then according to the problem's statement we have the system of two equations:
    # s + w = x1 (since "she used a total of 'x1' teaspoons of sugar and cups of water")
    # s/w = 7/13 (since "she makes coffee using teaspoons of sugar and cups of water in the ratio of 7:13")
    # Solving this system gives us s = 7x1/20.
    return 7 * x1 // 20