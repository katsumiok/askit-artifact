# Recompilation count: 0
def sid_traveled_x1_miles_in_1bdb5e(x1, x2, x3, x4) -> int:
    # Sid traveled'x1'miles in'x2'hours. If Sid then traveled an additional'x3'miles in'x4'hours,
    # then the total distance covered is 'x1' + 'x3' and the total time taken is 'x2' + 'x4'.
    # The average speed is total distance divided by total time.
    total_distance = x1 + x3
    total_time = x2 + x4
    average_speed = total_distance / total_time
    # rounding down to the nearest whole number
    return int(average_speed)