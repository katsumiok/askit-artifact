# Recompilation count: 0
def candy_has_x1_light_blue_c9db90(x1, x2, x3, x4) -> int:
    # Candy has'x1'light blue spools of thread,'x2'dark blue spools of thread,'x3'light green spools of thread, and'x4'dark green spools of thread. What percent of her spools are blue?
    total_spools = x1 + x2 + x3 + x4
    blue_spools = x1 + x2
    percent_blue = (blue_spools / total_spools) * 100
    return int(percent_blue)   # return percentage as integer  