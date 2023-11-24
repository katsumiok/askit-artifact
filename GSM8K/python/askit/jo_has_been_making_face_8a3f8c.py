# Recompilation count: 3
def jo_has_been_making_face_8a3f8c(x1, x2, x3, x4, x5) -> float:
    # Jo has been making face masks. She can make'x1'small masks with'x2'yards of material and'x3'large masks with 2.25 yards of material. 
    # How much material would she need to make'x4'small and'x5'large masks for her class?

    # Calculate the amount of material needed for one small mask and one large mask
    small_mask_material = x2 / x1
    large_mask_material = 2.25 / x3

    # Calculate the total amount of material needed for 'x4' small masks and 'x5' large masks
    total_material = (small_mask_material * x4) + (large_mask_material * x5)

    return total_material