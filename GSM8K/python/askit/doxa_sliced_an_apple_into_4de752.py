# Recompilation count: 0
def doxa_sliced_an_apple_into_4de752(x1, x2, x3, x4) -> int:
    # Doxa sliced an apple into'x1'pieces. She ate'x2'slice, her sister ate'x3'more than her, and her brother ate'x4'more than her sister. How many slices of apple did they all eat?
    # x2 - slices ate by Doxa
    # x3 - slices ate by sister (more than Doxa)
    # x4 - slices ate by brother (more than Doxa's sister, hence more than Doxa+x3)
    total_slices_eaten = x2 + x2 + x3 + x2 + x3 + x4
    return total_slices_eaten