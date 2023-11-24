# Recompilation count: 0
def jim_has_a_x1_pack_3ef5f4(x1, x2, x3, x4, x5, x6) -> int:
    # Calculate the total pieces of gum Jim chews during the school day.
    gum_chewed_at_school = (x4 / x3) * x2
    # Add the pieces he chews on the way home and after dinner.
    total_gum_chewed = gum_chewed_at_school + x5 + x6
    # Subtract this amount from the total pack of gum.
    remaining_gum = x1 - total_gum_chewed
    # Give half of the remaining gum to his sister.
    gum_after_giving_to_sister = remaining_gum / 2
    # Return the remaining pieces of gum as an integer.
    return int(gum_after_giving_to_sister)