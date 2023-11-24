# Recompilation count: 0
def jason_has_a_phone_plan_37b378(x1, x2, x3) -> int:
    # Jason has a phone plan of'x1'minutes per month. 
    # Every day he has a 15-minute call with his boss, and he's had'x2'extra minutes of call this month to other people. 
    # How many minutes does Jason have left if this month has'x3'days?

    boss_call_minutes = 15 * x3  # Total minutes spent on calls with boss
    other_call_minutes = x2  # Total extra call minutes

    total_call_minutes = boss_call_minutes + other_call_minutes  # Total all call minutes
    remaining_minutes = x1 - total_call_minutes  # Remaining minutes of the plan

    return remaining_minutes