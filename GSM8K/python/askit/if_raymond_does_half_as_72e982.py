# Recompilation count: 0
def if_raymond_does_half_as_72e982(x1, x2) -> int:
    # If Raymond does half as much laundry as Sarah, and Sarah does 'x1' times as much laundry as David
    # calculate the difference in the amount of laundry Raymond and David do if Sarah does 'x2' pounds of laundry.

    # Sarah does 'x1' times as much laundry as David, so David does 'x2' / 'x1' pounds of laundry.
    david = x2 / x1

    # Raymond does half as much laundry as Sarah, so Raymond does 'x2' / 2 pounds of laundry.
    raymond = x2 / 2

    # difference in the amount of laundry Raymond and David do.
    difference = abs(raymond - david)

    return difference