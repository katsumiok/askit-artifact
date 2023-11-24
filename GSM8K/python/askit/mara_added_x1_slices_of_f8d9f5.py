# Recompilation count: 0
def mara_added_x1_slices_of_f8d9f5(x1, x2, x3, x4) -> int:
    # Mara added'x1'slices of cake to a plate that already had'x2'slices on it.
    total_slices = x1 + x2

    # She was getting hungrier so she tripled the number of slices she currently has.
    total_slices *= 3

    # She ate'x3'slices
    total_slices -= x3

    # and while she was distracted, her friend stole'x4'slices off her plate.
    total_slices -= x4

    # What number of cake slices remained on the plate?
    return total_slices