# Recompilation count: 0
def john_drives_to_his_friend_2ebe6c(x1, x2, x3, x4, x5) -> int:
    # To find the total time, we divide the total distance by the speed for both the trip to and from his friend's house.
    # Time_to_friend's house = (distance_to_friend's_house + detour_distance) / speed_going_to_friend's_house
    # Time_back_home = (distance_back_home) / speed_going_back_home
    time_to_friends_house = (x1 + x3) / x2
    time_back_home = x4 / x5

    # Total time = Time_to_friend's house + Time_back_home
    total_time = time_to_friends_house + time_back_home
   
    return total_time