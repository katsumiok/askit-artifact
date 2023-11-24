# Recompilation count: 0
def mary_has_x1_jars_of_2bc5f4(x1, x2, x3) -> int:
    # Calculation total sprinkles Mary has
    total_sprinkles = x1 * x2
    # Calculation total pans need to bake enough cupcakes
    total_pans = total_sprinkles / x3 
    # Rounding up since you can't have half a pan
    total_pans = int(total_pans) if total_pans.is_integer() else int(total_pans) + 1
    return total_pans