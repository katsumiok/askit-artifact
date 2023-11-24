# Recompilation count: 0
def mike_decides_he_wants_to_462417(x1) -> int:
    # Mike decides he wants to replace his movie collection with digital versions.  
    # He has'x1'movies.  
    # A third of the movies are in various series and he knows he can get those for only $6 of the cost of a normal movie by just buying the series together.  
    # 40% of the remaining movies are older movies which are $5.  
    # How much does replacing the movies cost if a normal movie costs $10?

    # First, calculate the number of series movies and their cost
    series_movies = x1 / 3
    series_cost = series_movies * 6

    # Calculate the remaining movies and their cost
    remaining_movies = x1 - series_movies
    older_movies = remaining_movies * 0.4
    older_movies_cost = older_movies * 5

    # Calculate the cost for the remaining normal movies
    normal_movies = remaining_movies - older_movies
    normal_movies_cost = normal_movies * 10

    # Total cost is the sum of series cost, older movies cost and normal movies cost
    total_cost = series_cost + older_movies_cost + normal_movies_cost
    return int(total_cost)