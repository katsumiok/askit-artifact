# Recompilation count: 0
def fireman_frank_has_x1_shoes_5dfc5d(x1, x2, x3, x4, x5) -> int:
    # Fireman Frank has'x1'shoes. If he gets'x2'pairs of shoes on Monday and gains'x3'new pairs on Wednesday and'x4'pairs on Friday, 
    # how many shoes will he have on Sunday if he gets rid of'x5'shoes on Saturday?
    # Since every pair of shoes contains 2 shoes, so we multiply x2, x3, x4 by 2.
    shoes = x1 + (x2 * 2) + (x3 * 2) + (x4 * 2) - x5
    return shoes