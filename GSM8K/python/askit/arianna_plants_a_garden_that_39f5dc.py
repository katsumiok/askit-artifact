# Recompilation count: 0
def arianna_plants_a_garden_that_39f5dc(x1, x2) -> int:
    # Arianna plants a garden that has 'x1' rows of flowers with 'x2' flowers in each row. Currently, only 4/5 of the planted flowers have bloomed. How many flowers in Arianna's garden have bloomed?
    total_flowers = x1 * x2
    bloomed_flowers = total_flowers * 4/5
    return int(bloomed_flowers)