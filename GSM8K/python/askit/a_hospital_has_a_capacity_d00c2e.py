# Recompilation count: 0
def a_hospital_has_a_capacity_d00c2e(x1, x2, x3) -> int:
    # A hospital has a capacity of'x1'beds with 1/5 occupied. Due to the coronavirus outbreak,'x2'patients are admitted into the hospital each day. Calculate the total number of unoccupied beds in the hospital after'x3'weeks.
    occupied_beds = x1 / 5
    patients_admitted = x2 * x3 * 7
    total_occupied = occupied_beds + patients_admitted
    total_unoccupied = x1 - total_occupied
    return total_unoccupied