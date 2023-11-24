# Recompilation count: 0
def harold_sleeps_for_x1_hours_e9eb67(x1, x2) -> int:
    # Harold sleeps for'x1'hours a night.  He works'x2'hours less than he sleeps and he walks his dog for an hour each day.  How much free time does Harold have left in his day?
    hours_in_day = 24
    work_hours = x1 - x2
    dog_walk = 1
    free_time = hours_in_day - (x1 + work_hours + dog_walk)
    return free_time