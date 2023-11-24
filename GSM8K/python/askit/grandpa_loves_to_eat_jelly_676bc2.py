# Recompilation count: 0
def grandpa_loves_to_eat_jelly_676bc2(x1, x2, x3) -> int:
    # Grandpa loves to eat jelly beans, but how many jelly beans he can eat depends on the size of the beans.  
    # It takes'x1'large jelly beans to fill Grandpa up. 
    # He can eat twice as many medium-sized beans as large beans. 
    # And eating'x2'small beans is the same as eating'x3'medium-sized bean.  
    # How many small beans can Grandpa eat? 

    # calculate how many medium-sized beans Grandpa can eat
    medium_beans = 2 * x1

    # calculate small beans equivalent to one medium bean
    small_beans_per_medium = x2 / x3

    # calculate how many small beans Grandpa can eat
    small_beans = medium_beans * small_beans_per_medium

    return int(small_beans)