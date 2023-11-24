# Recompilation count: 0
def lani_baked_x1_cookies_she_2077e1(x1, x2) -> int:
    # Lani baked'x1'cookies. She ate'x2'five cookies and placed the rest equally into five jars. How many cookies were in each jar?
    remaining_cookies = x1 - x2
    cookies_per_jar = remaining_cookies // 5
    return cookies_per_jar