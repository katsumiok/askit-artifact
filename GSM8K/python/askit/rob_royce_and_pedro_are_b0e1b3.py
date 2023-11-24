# Recompilation count: 0
def rob_royce_and_pedro_are_b0e1b3(x1) -> int:
    # Rob, Royce, and Pedro are contractors getting ready to put a new roof on three homes. If the three homes will need'x1'cases of shingles, with the first house needing 1/2 of the second, and the third needing double the first. How many cases of shingles will the third house need?
    # Let's denote the cases for the three homes with A, B, C respectively.
    # According to the problem, we have:
    # A + B + C = x1
    # A = 1/2 * B
    # C = 2 * A
    # By substituting A and C in the first equation we get:
    # 1/2 * B + B + 2 * 1/2 * B = x1
    # Solving the above equation for B gives B = 2/5 * x1
    # The number of cases the third house will need is C = 2 * A = 2 * 1/2 * B = B = 2/5 * x1
    return int(2/5 * x1)