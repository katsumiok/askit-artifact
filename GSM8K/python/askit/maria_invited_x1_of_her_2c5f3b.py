# Recompilation count: 0
def maria_invited_x1_of_her_2c5f3b(x1, x2, x3) -> int:
    # Initially, Maria and her friends have x1*x2 balloons plus 1 for Maria
    initial_balloons = x1*x2 + 1
    # Then Maria's mom gives each person (including Maria) x3 more balloons
    additional_balloons = (x1+1) * x3
    # The total balloons is the sum of initial and additional balloons
    total_balloons = initial_balloons + additional_balloons
    return total_balloons