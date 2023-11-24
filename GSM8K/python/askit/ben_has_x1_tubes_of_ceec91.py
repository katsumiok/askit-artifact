# Recompilation count: 0
def ben_has_x1_tubes_of_ceec91(x1, x2) -> int:
    # Ben has'x1'tubes of blue paint and'x2'tubes of yellow paint. 
    # Jasper has half as many tubes of blue paint as Ben, and three times as many tubes of yellow paint as Ben. 
    # How many tubes of paint does Jasper have?
    jasper_blue = x1 / 2
    jasper_yellow = x2 * 3
    return int(jasper_blue + jasper_yellow)