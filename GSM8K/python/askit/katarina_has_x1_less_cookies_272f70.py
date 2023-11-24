# Recompilation count: 0
def katarina_has_x1_less_cookies_272f70(x1, x2, x3, x4) -> int:
    # Katarina has'x1'less cookies than Max has. 
    # Max has'x2'more cookies than the Cookie Monster, 
    # and Summer has'x3'more cookies than Max.
    # If Katarina has'x4'cookies, how many cookies do they have in total?

    # If Katarina has 'x1' less cookies than Max, then Max has 'x1 + x4' cookies.
    max_cookies = x1 + x4

    # If Max has 'x2' more cookies than the Cookie Monster, then Cookie Monster has 'max_cookies - x2' cookies.
    monster_cookies = max_cookies - x2

    # if Summer has 'x3' more cookies than Max, then Summer has 'max_cookies + x3' cookies.
    summer_cookies = max_cookies + x3

    # Total cookies they have is the sum of all their cookies.
    total_cookies = x4 + max_cookies + monster_cookies + summer_cookies

    return total_cookies