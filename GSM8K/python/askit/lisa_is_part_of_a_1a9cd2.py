# Recompilation count: 0
def lisa_is_part_of_a_1a9cd2(x1, x2) -> int:
    # Lisa is part of a choir that has'x1'members, 50% of which are boys and 50% of which are girls.  The choir decides to perform with just its female members.  On the day of the performance, however, half the people performing can't make it to the show because their bus breaks down.  The choir's'x2'teachers then decide to sing with them. How many people sang in the performance?
    
    female_members = x1 // 2  # Number of female members in the choir
    able_to_perform = female_members // 2  # Since half the people performing can't make it to the show
    total_singers = able_to_perform + x2  # Including the teachers who decided to sing
    
    return total_singers