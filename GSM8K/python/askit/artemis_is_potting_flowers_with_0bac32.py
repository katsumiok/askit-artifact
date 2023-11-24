# Recompilation count: 0
def artemis_is_potting_flowers_with_0bac32(x1, x2, x3, x4) -> int:
    # Artemis is potting flowers with her father. They buy a 30-pound bag of soil. 
    # Each rose needs 'x1' pound. Each carnation needs 1.5 pounds. 
    # Each Sunflower needs 'x2' pounds.
    # If they plant 'x3' sunflowers and 'x4' carnations, how many roses can they plant?

    total_soil = 30
    used_soil = x2 * x3 + 1.5 * x4 # Soil used for sunflowers and carnations
    remaining_soil = total_soil - used_soil   # Soil remaining for roses

    return int(remaining_soil // x1)  # The number of roses they can plant