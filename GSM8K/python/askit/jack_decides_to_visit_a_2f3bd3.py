# Recompilation count: 0
def jack_decides_to_visit_a_2f3bd3(x1, x2, x3) -> int:
    # Jack decides to visit a museum'x1'miles from home.  He drives'x2'mph there and back.  He spends'x3'hours at the museum.  How long is he gone from home?
    total_miles = 2 * x1 # the total miles he drives to the museum and back
    drive_time = total_miles / x2 # the time it takes to drive there and back at the given speed
    total_time = drive_time + x3 # the total time is the time spent at the museum plus the driving time
    return total_time