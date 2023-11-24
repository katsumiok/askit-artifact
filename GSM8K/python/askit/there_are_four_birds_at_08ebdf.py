# Recompilation count: 1
def there_are_four_birds_at_08ebdf(x1) -> int:
    # Sally Four and Sally Thirtytwo are the same age
    sally_four = sally_thirtytwo = x1

    # Granny Red is two times as old as Sally Four
    granny_red = 2 * sally_four

    # Sally Two is three years older than Granny Red
    sally_two = granny_red + 3

    # Total ages of the four birds
    total_age = sally_two + granny_red + sally_four + sally_thirtytwo
    return total_age