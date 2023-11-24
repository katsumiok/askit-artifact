# Recompilation count: 0
def every_hour_paige_can_bake_d495bf(x1, x2, x3) -> int:
    total_loaves = x1 * 5
    total_slices = total_loaves * x2
    total_cents = total_slices * x3
    total_dollars = total_cents / 100
    return int(total_dollars)