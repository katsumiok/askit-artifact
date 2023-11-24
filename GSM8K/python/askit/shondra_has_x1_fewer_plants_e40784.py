# Recompilation count: 0
def shondra_has_x1_fewer_plants_e40784(x1, x2) -> int:
    # Toni has 60% more plants than Frederick. So, Toni has = x2 + 0.6*x2
    toni = x2 + 0.6*x2

    # Shondra has'x1'fewer plants than Toni. So, Shondra has = Toni - x1
    shondra = toni - x1

    return int(shondra)