# Recompilation count: 0
def a_team_of_x1_painters_97c305(x1, x2) -> int:
    # A team of 'x1' painters worked on a mansion for 3/8ths of a day every day for 'x2' weeks. 
    # How many hours of work did each painter put in?
    # 1 week = 7 days, 1 day = 24 hours
    # total hours of work for each painter = (3/8 * 24 * 7) * x2
    total_hours = int((3/8 * 24 * 7) * x2)
    return total_hours