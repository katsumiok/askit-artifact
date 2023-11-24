# Recompilation count: 0
def martin_s_weight_is_x1_be6fd1(x1, x2, x3, x4) -> int:
    # Martin's weight is 'x1'kg. 
    # Carl’s weight is 'x2'kg more than Martin’s weight. 
    carls_weight = x1 + x2
    
    # Christian’s weight is 'x3'kg more than Carl’s weight. 
    christians_weight = carls_weight + x3
    
    # Harry is 'x4'kg less than Christian’s weight. What is the weight of Harry, in kg?
    harrys_weight = christians_weight - x4

    return harrys_weight