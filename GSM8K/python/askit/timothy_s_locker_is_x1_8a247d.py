# Recompilation count: 0
def timothy_s_locker_is_x1_8a247d(x1) -> int:
    # Timothy's locker is'x1'cubic inches. 
    # Zack's locker is half as big as Timothy's locker. 
    # Peter's locker is 1/4 as big as Zack's locker. 
    # Function returns the size of Peter's locker in cubic inches.
   
   # Zack's locker size
    zack_locker = x1 / 2
    
    # Peter's locker size
    peter_locker = zack_locker / 4
   
    return int(peter_locker)