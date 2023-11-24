# Recompilation count: 0
def if_one_person_can_paint_22b80a(x1, x2) -> int:
    # If one person can paint half a house in'x1'days, how many hours would it take for'x2'people to paint a whole house?
    one_person_total = x1 * 2 # multiply x1 by 2 because one person can only paint half house in x1 days
    one_person_hours = one_person_total * 24 # total hours one person works to paint the whole house
    
    #assuming each person paints at the same rate
    total_hours = one_person_hours / x2 # divide total hours by number of people

    return total_hours