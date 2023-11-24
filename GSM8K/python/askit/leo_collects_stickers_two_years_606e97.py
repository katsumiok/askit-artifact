# Recompilation count: 0
def leo_collects_stickers_two_years_606e97(x1, x2) -> int:
    # Leo collects stickers. Two years ago, he had'x1'stickers in his collection. Last year, Leo collected'x2'stickers. This year, he collected twice the number of stickers as the previous year. How many stickers does Leo have in his collection?
    this_year_stickers = x2 * 2
    total_stickers = x1 + x2 + this_year_stickers
    return total_stickers