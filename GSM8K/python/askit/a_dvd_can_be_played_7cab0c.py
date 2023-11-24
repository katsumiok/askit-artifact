# Recompilation count: 0
def a_dvd_can_be_played_7cab0c(x1, x2, x3) -> int:
    # A DVD can be played'x1'times before it breaks. 
    # There are two DVDs in the public library, one has been played'x2'times and the other has been played'x3'times.
    # How many total times can both DVDs be played before they break?

    # Calculate the remaining plays for each DVD
    remaining_plays_dvd1 = x1 - x2
    remaining_plays_dvd2 = x1 - x3

    # Return the sum of the remaining plays of both DVDs
    return remaining_plays_dvd1 + remaining_plays_dvd2