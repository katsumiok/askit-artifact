# Recompilation count: 0
def parker_chews_x1_pieces_of_7387a1(x1, x2, x3) -> int:
    # Parker chews'x1'pieces of gum a day.  A pack of gum has'x2'pieces of chewing gum per pack.  How many packs of gum will he need to last him'x3'days?
    total_gum_needed = x1 * x3
    packs_needed = total_gum_needed // x2

    # if there is leftover gum, he needs one more pack
    if total_gum_needed % x2 != 0:
        packs_needed += 1
    return packs_needed