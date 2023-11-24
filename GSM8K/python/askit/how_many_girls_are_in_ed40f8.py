# Recompilation count: 0
def how_many_girls_are_in_ed40f8(x1) -> int:
    # How many girls are in the school if 40% of a school population is made up of'x1'boys?
    total_students = (x1 * 100) / 40  # because boys make up 40% 
    girls = total_students - x1        # rest are girls
    return int(girls)