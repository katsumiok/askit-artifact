# Recompilation count: 0
def katerina_makes_designer_jewelry_her_d326ae(x1, x2) -> int:
    # each topaz gemstone is one inch long
    topaz_length = x1

    # each necklace is made to a total length of'x2'inches
    total_length = x2

    # calculate the remaining length after adding topaz gemstones
    remaining_length = total_length - topaz_length

    # each sterling silver bead is one-quarter of an inch long
    bead_length = 0.25

    # calculate the number of sterling silver beads Katerina uses per necklace
    number_of_beads = int(remaining_length / bead_length)

    return number_of_beads