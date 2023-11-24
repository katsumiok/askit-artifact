# Recompilation count: 0
def jenny_buys_x1_bag_of_4068a0(x1, x2, x3, x4, x5, x6) -> int:
    # Calculate total cookies in a week
    total_cookies = x1 * x2

    # Calculate the number of cookies son eats in a week
    cookies_for_son = x3 * x4

    # Calculate the number of cookies husband eats in a week
    cookies_for_husband = x5 * x6

    # Calculate the number of cookies Jenny eats by subtracting the cookies eaten by son and husband from total
    cookies_for_jenny = total_cookies - (cookies_for_son + cookies_for_husband)

    return cookies_for_jenny