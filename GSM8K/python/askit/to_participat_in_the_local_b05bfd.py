# Recompilation count: 0
def to_participat_in_the_local_b05bfd(x1) -> int:
    white_oak_first_day = 20
    lodgepole_first_day = white_oak_first_day * 2

    white_oak_second_day = white_oak_first_day + x1
    lodgepole_second_day = lodgepole_first_day + lodgepole_first_day // 4

    total_first_day = white_oak_first_day + lodgepole_first_day
    total_second_day = white_oak_second_day + lodgepole_second_day

    return total_first_day + total_second_day