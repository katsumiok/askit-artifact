# Recompilation count: 0
def zack_s_locker_is_half_33eef0(x1) -> int:
    # Zack's locker is half as big as Timothy's locker. 
    # Peter's locker is 1/4 as big as Zack's locker. 
    # If Peter's locker is'x1'cubic inches, how big is Timothy's locker in cubic inches?
    zack_locker_size = x1 * 4 
    timothy_locker_size = zack_locker_size * 2
    return timothy_locker_size