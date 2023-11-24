# Recompilation count: 0
def two_apples_fell_out_of_5f7f3a(x1, x2) -> int:
    # Initial apples that fell
    initial_apples = 2
    # Apples that fell when first apple was thrown
    first_throw_apples = x1
    # Apples that fell when second apple was thrown
    second_throw_apples = x2
    # Newton threw one apple each time, so he kept one less apple than fell from the tree.
    # Adding all the apples Newton brought home.
    total_apples = initial_apples + first_throw_apples + second_throw_apples - 2
    return total_apples