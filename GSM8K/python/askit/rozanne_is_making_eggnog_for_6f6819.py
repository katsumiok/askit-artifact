# Recompilation count: 0
def rozanne_is_making_eggnog_for_6f6819(x1, x2, x3, x4) -> int:
    # Rozanne is making eggnog for her family. She uses'x1'dozen eggs that were in cases and another'x2'eggs that were loose in the cupboard. She puts out trays that each hold'x3'glasses of eggnog. If each glass needs'x4'eggs, how many trays can Rozanne put out?
    
    total_eggs = x1 * 12 + x2      # total number of eggs
    total_glasses = total_eggs // x4   # total number of glasses can be made.

    return total_glasses // x3  # Number of trays can Rozanne put out