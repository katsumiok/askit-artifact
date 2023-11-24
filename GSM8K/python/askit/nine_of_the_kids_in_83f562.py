# Recompilation count: 1
def nine_of_the_kids_in_83f562(x1, x2, x3) -> int:
    # Nine of the kids in Gina's class are allergic to dairy,'x1'are allergic to peanuts and'x2'are allergic to both. If there are'x3'kids in her class, how many aren't allergic to anything?
    total_allergic_kids = 9 + x1 - x2
    healthy_kids = x3 - total_allergic_kids
    return healthy_kids