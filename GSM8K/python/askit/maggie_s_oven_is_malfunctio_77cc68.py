# Recompilation count: 0
def maggie_s_oven_is_malfunctio_77cc68(x1, x2) -> int:
    # Determining the offset. If 468 is the real temperature when the oven was set to x1, then we can calculate the ratio
    ratio = 468 / x1
    # Now we can determine what the oven should be set to for desired temperature x2
    target_temp = x2 / ratio
    return round(target_temp)