# Recompilation count: 0
def jada_rory_and_kora_make_b54561(x1, x2) -> int:
    # Jada, Rory, and Kora make clay dishes to present as art for their school project. Jada makes twice as many clay dishes as Rory, while Rory makes'x1'more clay dishes than Kora. If Kora made'x2'dishes, how many clay dishes they all make together?
    # number of clay dishes made by Kora = x2
    # number of clay dishes made by Rory = x1 + x2
    # number of clay dishes made by Jada = 2 * (x1 + x2)
    # total number of clay dishes made by all = x2 + (x1 + x2) + 2 * (x1 + x2)
    return x2 + (x1 + x2) + 2 * (x1 + x2)