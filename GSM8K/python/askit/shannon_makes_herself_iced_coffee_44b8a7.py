# Recompilation count: 0
def shannon_makes_herself_iced_coffee_44b8a7(x1, x2, x3, x4) -> int:
    # Shannon makes herself iced coffee by brewing hot coffee and adding ice cubes. Each ice cube cools the coffee by'x1'degrees but makes the coffee'x2'milliliters weaker. Any added liquid also weakens the coffee. How many milliliters weaker is Shannon’s iced coffee when it is cooled by'x3'degrees and she adds'x4'milliliters of cream?

    # First, find out how many ice cubes Shannon has used.
    ice_cubes_used = x3 // x1

    # Each ice cube weakens the coffee by 'x2', so total weakening due to ice cubes.
    weaken_due_to_ice_cubes = ice_cubes_used * x2

    # Finally, total weakening is due to ice cubes and the amount of cream added.
    total_weakening = weaken_due_to_ice_cubes + x4

    return total_weakening