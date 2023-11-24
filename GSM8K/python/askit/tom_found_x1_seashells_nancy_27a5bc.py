# Recompilation count: 0
def tom_found_x1_seashells_nancy_27a5bc(x1, x2, x3, x4) -> int:
    # Tom found 'x1' seashells, Nancy found 'x2' seashells, and Benny found 'x3' seashells on the beach.
    # When they cleaned them, they discovered that 'x4' were cracked.
    # How many good seashells did they find together?
    total_seashells = x1 + x2 + x3
    good_seashells = total_seashells - x4
    return good_seashells