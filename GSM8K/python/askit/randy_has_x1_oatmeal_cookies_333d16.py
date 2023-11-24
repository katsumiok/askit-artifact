# Recompilation count: 7
def randy_has_x1_oatmeal_cookies_333d16(x1, x2, x3, x4, x5, x6, x7) -> int:
    # Randy has'x1'oatmeal cookies,'x2'chocolate chip cookies, and'x3'sugar cookies. He ate'x4'cookies for an early day snack, one of each flavor. He ate'x5'oatmeal cookies for lunch. He gives'x6'sugar cookies to his friends. Then, he bakes'x7'of each flavor for dinner. How many cookies does he have now?
    total_cookies = x1 + x2 + x3 # Total cookies at the start
    total_cookies -= x4 # Cookies consumed for snack
    total_cookies -= x5 # Oatmeal cookies eaten during lunch
    total_cookies -= x6 # Sugar cookies given to friends
    total_cookies += x7 * 3 # New batch of cookies each of 3 flavors
    return total_cookies