# Recompilation count: 0
def anthony_had_x1_pencils_he_b5705a(x1) -> int:
    # Anthony had 'x1' pencils. He gave 1/2 of his pencils to Brandon, and he gave 3/5 of the remaining pencils to Charlie. He kept the remaining pencils.
    to_Brandon = x1 / 2
    remaining = x1 - to_Brandon
    to_Charlie = 3/5 * remaining
    Anthony_kept = remaining - to_Charlie
    return int(Anthony_kept)