# Recompilation count: 0
def jake_is_walking_through_the_53e384(x1, x2, x3, x4, x5, x6) -> int:
    # Jake is walking through the Museum of Entomology. He sees'x1'spiders with'x2'legs each,'x3'insects with'x4'legs each, and'x5'rare mutant invertebrates with'x6'legs each. How many legs does Jake see total?
    total_spider_legs = x1 * x2
    total_insect_legs = x3 * x4
    total_mutant_legs = x5 * x6
    
    total_legs = total_spider_legs + total_insect_legs + total_mutant_legs
    return total_legs