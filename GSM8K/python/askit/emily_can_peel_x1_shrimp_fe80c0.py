# Recompilation count: 0
def emily_can_peel_x1_shrimp_fe80c0(x1, x2, x3, x4) -> int:
    # Emily can peel 'x1' shrimp a minute and saute 'x2' shrimp in 'x3' minutes. How long will it take her to peel and cook 'x4' shrimp?
    peel_time = x4 / x1
    cook_time = (x4 / x2) * x3
    total_time = peel_time + cook_time
    return round(total_time)