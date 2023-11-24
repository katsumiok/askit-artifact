# Recompilation count: 0
def students_in_class_3b_are_11dff8(x1, x2, x3, x4) -> int:
    # Students in class 3B are collecting school points for behavior. If they get enough points in total, they can go on a trip.
    # In the class, there are Adam, Martha, Betty, and Tom.
    # Adam has collected 'x1' points.
    adam_points = x1
    # Betty was better than Adam and collected 30% more.
    betty_points = adam_points + (adam_points * 0.3)
    # Tom has 'x3' points less than Betty.
    tom_points = betty_points - x3
    # Marta managed to collect 'x2' times more points than Tom
    marta_points = x2 * tom_points

    # How many points is the class missing to go on the trip if the minimum threshold is 'x4' points?
    total_points = adam_points + betty_points + marta_points + tom_points
    points_needed_for_trip = x4

    if total_points >= points_needed_for_trip:
        return 0
    else:
        return points_needed_for_trip - total_points