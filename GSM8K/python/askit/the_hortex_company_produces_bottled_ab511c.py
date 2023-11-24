# Recompilation count: 0
def the_hortex_company_produces_bottled_ab511c(x1, x2, x3) -> int:
    # The Hortex company produces bottled carrot juices. Every day it can produce'x1'bottles of these juices. Each juice can cover 20% of'x2'person'ts daily energy demand. How many more bottles of juices would Hortex have to produce to be able to satisfy 100% of the daily energy needs of'x3'people?
    produced_energy = x1 * (20 / 100) * x2
    required_energy = x3 * x2
    required_bottles = required_energy / (20 / 100 * x2)
    
    return int(required_bottles - x1) # We subtract x1(the number of bottles already produced)