# Recompilation count: 0
def a_zookeeper_is_counting_how_e5b132(x1, x2) -> int:
    # A zookeeper is counting how many lions are in their enclosure. She counts'x1'female lions, half as many male lions, and'x2'lion cubs. How many lions are in the enclosure?
    male_lions = x1 // 2
    total_lions = x1 + male_lions + x2
    return total_lions