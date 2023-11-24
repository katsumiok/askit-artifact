# Recompilation count: 0
def doctor_jones_is_scheduling_his_c36c7f(x1) -> int:
    total_hours = 9
    inpatients_time = (x1 * 20)/60 # time in hours
    appointment_time = (10 * 30)/60 # time in hours
    remaining_time = total_hours - (inpatients_time + appointment_time)
    return remaining_time