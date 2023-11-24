# Recompilation count: 0
def rose_is_out_picking_flowers_416d45(x1, x2, x3, x4, x5, x6, x7, x8, x9) -> int:
    # Calculate petals from all flowers
    petals_from_flowers_1 = x1 * x2
    petals_from_flowers_2 = x3 * x4
    petals_from_flowers_3 = x5 * x6
    petals_from_flowers_4 = x7 * x8

    # Total petals from the flowers that Rose picked
    total_petals_picked = petals_from_flowers_1 + petals_from_flowers_2 + petals_from_flowers_3 + petals_from_flowers_4

    # Petals from the flowers that were blown away
    petals_blow_away = x9 * (x2 + x4 + x6 + x8)

    # Total petals in the flowers that Rose put in the vase
    total_petals_in_vase = total_petals_picked - petals_blow_away

    return total_petals_in_vase