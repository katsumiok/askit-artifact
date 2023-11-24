# Recompilation count: 0
def max_plans_to_watch_two_8f2fec(x1, x2, x3, x4) -> int:
    # Max plans to watch two movies this weekend. The first movie is'x1'hour and'x2'minutes long while the second movie is'x3'hours and'x4'minutes long. How many minutes will it take Max to watch the two movies?
    first_movie_minutes = x1 * 60 + x2
    second_movie_minutes = x3 * 60 + x4
    total_minutes = first_movie_minutes + second_movie_minutes
    return total_minutes