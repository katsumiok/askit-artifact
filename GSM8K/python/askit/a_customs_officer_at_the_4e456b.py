# Recompilation count: 0
def a_customs_officer_at_the_4e456b(x1, x2, x3) -> int:
    # Calculate the number of containers that were imported on the second day
    initial_vehicle_count = x1 * x2  # total count from first day
    total_vehicle_at_port = 30  # total vehicles at port after second day
    # assuming each container on second day contains x3 vehicles
    second_day_containers = (total_vehicle_at_port - initial_vehicle_count) // x3
    return second_day_containers