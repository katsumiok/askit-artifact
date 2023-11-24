# Recompilation count: 1
def john_buys_a_cassette_with_8fe29a(x1, x2) -> int:
    # John buys a cassette with'x1'songs.  The first song is'x2'minutes and the second song is 60% longer.  How much time was the total cassette?
    second_song = x2 + 0.6 * x2
    total_time = (x1 - 2) * x2 + x2 + second_song
    return int(total_time)