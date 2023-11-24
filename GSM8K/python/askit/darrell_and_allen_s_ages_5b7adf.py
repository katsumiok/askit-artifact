# Recompilation count: 0
def darrell_and_allen_s_ages_5b7adf(x1) -> int:
    # Darrell and Allen's ages are in the ratio of 7:11. If their total age now is 162, calculate Allen's age'x1'years from now.
    darrell_to_allen_ratio = 7/11
    total_age = 162
    allen_current_age = total_age / (1+darrell_to_allen_ratio)
    allen_future_age = allen_current_age + x1
    return int(allen_future_age)