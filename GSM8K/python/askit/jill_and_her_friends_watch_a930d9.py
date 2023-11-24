# Recompilation count: 0
def jill_and_her_friends_watch_a930d9(x1, x2) -> int:
    # Jill and her friends watch 'x1' movies every Saturday and half the number of movies on Sunday than on Saturday. If they watch movies every weekend, how many movies can they watch in 'x2' weeks?
    movies_on_saturday = x1
    movies_on_sunday = movies_on_saturday / 2
    total_movies_per_weekend = int(movies_on_saturday + movies_on_sunday)
    return total_movies_per_weekend * x2