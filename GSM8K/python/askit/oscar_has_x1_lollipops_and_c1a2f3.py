# Recompilation count: 0
def oscar_has_x1_lollipops_and_c1a2f3(x1, x2, x3, x4, x5) -> int:
    # Oscar has'x1'lollipops and eats'x2'on his way to school.  He passes'x3'out to his friends.  He buys twice as many lollipops on his way home as he gave to his friends.  
    # He eats'x4'more that night and'x5'more in the morning.  How many lollipops does Oscar have?
    lollipops_left = x1 - x2 - x3  # lollipops left after eating and giving away
    lollipops_bought = x3 * 2  # lollipops bought (twice the number given away)
    lollipops_left += lollipops_bought  # add the bought lollipops to the total
    lollipops_left -= x4 + x5  # subtract the eaten ones 
    return lollipops_left