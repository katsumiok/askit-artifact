# Recompilation count: 0
def gunther_the_gorilla_had_x1_1e7dc6(x1, x2, x3, x4) -> int:
    # Gunther, the gorilla, had'x1'bananas hidden under a fern branch.  When Gunther wasn't looking, 
    # Arnold, the chimp, stole half of the bananas from the pile.  The next day, Gunther added another
    #'x2'bananas to his pile, but later that evening, Arnold stole another'x3'of the bananas.  
    # On the third day, Gunther added another'x4'bananas to his pile and began counting bananas.  
    # How many bananas did Gunther find were in the pile?
    bananas_left = (x1 / 2) + x2 - x3 + x4
    return bananas_left