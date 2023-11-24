# Recompilation count: 0
def movie_a_was_one_fourth_2ba78c(x1) -> int:
    # Movie C was 1.25 hours => 1.25 * 60 = 75 minutes.
    movie_C_length = 75
    # Movie B was 'x1' minutes longer than movie C
    movie_B_length = movie_C_length + x1
    # Movie A was one-fourth the length of Movie B.
    movie_A_length = movie_B_length / 4
    return movie_A_length