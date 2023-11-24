# Recompilation count: 0
def bob_wants_to_dig_a_fb4348(x1, x2, x3, x4) -> int:
    # Bob wants to dig a hole'x1'feet long by'x2'feet wide by'x3'feet deep. If it takes him'x4'seconds to shovel a cubic foot of earth, how long will it take him to dig the hole?
    volume = x1 * x2 * x3
    time = volume * x4
    return time