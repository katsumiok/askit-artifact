# Recompilation count: 0
def a_custodian_has_to_clean_73ed6a(x1, x2, x3, x4) -> int:
    total_min_required = x1 * x3  # total time required in minutes
    total_day_minutes = x2 * x4 * 60  # total time available in minutes

    # calculate percentage and round it to the nearest integer
    percentage = round((total_min_required / total_day_minutes) * 100)

    return percentage