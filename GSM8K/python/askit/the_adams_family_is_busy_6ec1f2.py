# Recompilation count: 0
def the_adams_family_is_busy_6ec1f2(x1, x2, x3) -> int:
    # The Adams family is busy making cookies. They've made 'x1' cookies so far. They have 'x2' rainbow cookies, 'x3' oatmeal cookies, and some chocolate chip cookies. To find out how many chocolate chip cookies they have made, we subtract the number of rainbow and oatmeal cookies from the total number of cookies.
    chocolate_chip_cookies = x1 - x2 - x3
    return chocolate_chip_cookies