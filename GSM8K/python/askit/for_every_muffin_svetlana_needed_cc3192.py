# Recompilation count: 0
def for_every_muffin_svetlana_needed_cc3192(x1, x2, x3) -> int:
    # For every muffin, Svetlana needed'x1'tablespoons of flour,'x2'tablespoons of sugar, and 0.25 of a tablespoon of salt. 
    # How many tablespoons of dry ingredients would Svetlana need to make'x3'muffins?
    
    # Calculate the total amount of dry ingredients needed
    dry_ingredients_needed = (x1 + x2 + 0.25) * x3
    
    return int(dry_ingredients_needed)