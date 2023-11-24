# Recompilation count: 0
def grayson_recycles_cans_and_bottles_6ef471() -> int:
    # Define the worth of each can and bottle
    can_worth = 2
    bottle_worth = 3

    # Define the number of cans and bottles Grayson drinks in a week
    cans_per_week = 3
    bottles_per_week = 5

    # Calculate the total worth for cans and bottles in a week
    total_per_week = (can_worth * cans_per_week) + (bottle_worth * bottles_per_week)

    # There are four weeks in a month, calculate the total for the month
    total_per_month = total_per_week * 4

    return total_per_month