# Recompilation count: 0
def alice_likes_to_count_the_09364a(x1) -> int:
    # Alice likes to count the puffs of clouds in the sky while she eats her lunch outside at school. On Monday she counts just'x1'puffs of clouds. Each day after that through Friday, though, she sees double the number of clouds in the sky as the day before. At the end of the week, how many clouds will she have counted in the sky at lunch across all five days?
    total_puffs = x1 + (x1*2) + (x1*4) + (x1*8) + (x1*16)
    return total_puffs