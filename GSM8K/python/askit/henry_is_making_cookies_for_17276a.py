# Recompilation count: 0
def henry_is_making_cookies_for_17276a(x1, x2, x3) -> int:
    # first, add the cookies that Henry dropped to the total he has now, to get the total amount he baked
    total_baked = x3 + x2
    # since he baked 'x1' more than he meant to, subtract this amount to find out how many he intended to bake
    intended_baked = total_baked - x1
    # since he wanted to bake twice as many as last year, divide by 2 to find the amount he baked last year
    last_year = intended_baked / 2
    return int(last_year)