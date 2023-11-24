# Recompilation count: 0
def melanie_found_a_blueprint_online_29c827(x1, x2, x3, x4) -> int:
    # Calculate the total number of toothpicks Melanie has saved so far
    total_saved = x2 * x3
    # Calculate the additional number of toothpicks she needs
    additional_needed = x1 - total_saved
    # Return the number of weeks it will take to save the additional toothpicks
    # '//' is used for integer division (i.e., the result is rounded down to the nearest integer)
    # We add 1 to the result, because even if she has all but one of the toothpicks she needs, it will still take her a full week to save that last one
    return (additional_needed // x2) + (additional_needed % x2 > 0)