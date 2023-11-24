# Recompilation count: 0
def andrew_plans_a_road_trip_6a30cd(x1) -> int:
    # Andrew plans a road trip from New Jersey to Rochester. It takes'x1'days to travel by bus and half as many days to travel by car from New Jersey to Rochester. How many days will he travel if he plans to go to Rochester by bus and return from Rochester by car?
    travel_time_by_car = x1/2
    total_travel_time = x1 + travel_time_by_car
    return total_travel_time