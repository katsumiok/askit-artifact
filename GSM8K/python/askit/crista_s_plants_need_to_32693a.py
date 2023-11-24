# Recompilation count: 0
def crista_s_plants_need_to_32693a(x1, x2, x3, x4) -> int:
    # Crista's plants need to be watered every day. She has'x1'plants.'x2'of her plants need half of a cup of water.'x3'plants need'x4'cup of water. The rest need a quarter of a cup of water. How many cups of water does Crista need every day for her plants?

    # calculating the quantity for the 'x2' plants
    half_cup_plants = x2 * 0.5

    # calculating the quantity for the 'x3' plants
    x4_cup_plants = x3 * x4

    # calculating the rest of the plants that need a quarter cup of water
    quarter_cup_plants = (x1 - x2 - x3) * 0.25

    # calculating total cups of water Crista needs every day
    total_water = half_cup_plants + x4_cup_plants + quarter_cup_plants 

    return total_water