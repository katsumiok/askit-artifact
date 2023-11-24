# Recompilation count: 0
def count_the_number_of_occurrence_844afb(x, xs) -> int:
    # Count the number of occurrences of 'x' in 'xs'.
    count = 0
    for item in xs:
        if item == x:
            count += 1
    return count