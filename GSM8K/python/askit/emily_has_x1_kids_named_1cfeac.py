# Recompilation count: 0
def emily_has_x1_kids_named_1cfeac(x1, x2, x3, x4, x5) -> int:
    # Amy is 'x2' years older than Jackson and 'x3' years younger than Corey
    # James is 'x4' and is 'x5' year younger than Corey
    # So, Corey = James + x5
    # And, Amy = Corey - x3
    # Hence, Jackson = Amy - x2
    corey_age = x4 + x5
    amy_age = corey_age - x3
    jackson_age = amy_age - x2
    return jackson_age