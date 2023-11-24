# Recompilation count: 0
def a_fog_bank_rolls_in_4d6eaf(x1, x2, x3) -> int:
    # A fog bank rolls in from the ocean to cover a city. It takes'x1'minutes to cover every'x2'miles of the city. If the city is'x3'miles across from the oceanfront to the opposite inland edge, how many minutes will it take for the fog bank to cover the whole city?
    time_to_cover_whole_city = (x1 / x2) * x3
    return int(time_to_cover_whole_city)