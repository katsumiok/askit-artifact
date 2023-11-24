# Recompilation count: 0
def greta_and_celinda_are_baking_448cbb(x1, x2) -> int:
    # Greta and Celinda are baking cookies. Greta bakes'x1'cookies and Celinda bakes twice as many. If the pair eat'x2'of the cookies while they are cooling and put the rest in a box, how many cookies are there in the box?
    celinda_cookies = x1 * 2
    total_cookies = celinda_cookies + x1
    cookies_in_box = total_cookies - x2
    return cookies_in_box