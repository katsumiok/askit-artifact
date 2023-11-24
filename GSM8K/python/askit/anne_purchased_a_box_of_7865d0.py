# Recompilation count: 0
def anne_purchased_a_box_of_7865d0(x1, x2, x3) -> int:
    # Anne purchased a box of sweets that contains'x1'packs, and each pack has'x2'pieces. She kept two packs and gave the rest to her'x3'friends equally. How many pieces of sweets did each of her friends receive?

    #Calculate the total number of sweets
    total_sweets = x1 * x2

    #Subtrack the sweets Anne kept
    sweets_after_anne = total_sweets - (2 * x2)

    #Calculate the number of sweets each friend received
    sweets_per_friend = sweets_after_anne // x3

    return sweets_per_friend