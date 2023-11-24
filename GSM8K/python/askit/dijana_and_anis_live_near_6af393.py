# Recompilation count: 0
def dijana_and_anis_live_near_6af393(x1) -> int:
    # Dijana and Anis live near a lake, and every weekend they go out rowing into the lake. On a Sunday morning, both went out rowing, and Dijana rowed for'x1'miles the whole day. Anis rowed 1/5 times more miles than Dijana. Calculate the total distance the two of them rowed on that day.
    anis_distance = x1 + x1 * 1/5
    total_distance = x1 + anis_distance
    return total_distance