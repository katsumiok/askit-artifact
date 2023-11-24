# Recompilation count: 0
def james_buys_a_new_wardrobe_0cb597(x1, x2, x3) -> int:
    # James buys a new wardrobe.  He buys'x1'suits and'x2'dress pants.  He also buys'x3'dress shirts per suit.  
    # The suits cost $750 each and the dress pants cost 1/5 that cost.  The dress shirts were $60 each.  How much did everything cost?

    suits_cost = x1 * 750
    dress_pants_cost = x2 * (750/5)
    dress_shirts_cost = x1 * x3 * 60

    total_cost = suits_cost + dress_pants_cost + dress_shirts_cost

    return total_cost