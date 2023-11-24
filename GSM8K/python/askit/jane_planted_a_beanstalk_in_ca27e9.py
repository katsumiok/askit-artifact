# Recompilation count: 0
def jane_planted_a_beanstalk_in_ca27e9(x1, x2, x3) -> int:
    # Jane planted a beanstalk in her backyard. After the first week, it was 'x1' inches tall. It doubled in height the second week. It grew another 'x2' inches in the third week. How tall was the beanstalk after 'x3' weeks?

    # After first week
    total_height = x1
    
    # After second week
    if x3 >= 2:
        total_height *= 2
    
    # After third week
    if x3 >= 3:
        total_height += x2
    
    return total_height