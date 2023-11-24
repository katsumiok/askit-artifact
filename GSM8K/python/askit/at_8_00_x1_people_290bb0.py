# Recompilation count: 0
def at_8_00_x1_people_290bb0(x1) -> int:
    # At 8:00,'x1'people lined up at a polling station to cast their vote on election day. By midday 2/5 of the people had voted and by 16:00 2/3 of the remaining people had voted. What's the number of those who had not voted by 16:00?
    
    # By midday 2/5 of the people had voted
    midday_voted = 2/5 * x1
    
    # Remaining people after midday voting
    remaining_after_midday = x1 - midday_voted
    
    # By 16:00 2/3 of the remaining people had voted
    voted_by_16_00 = 2/3 * remaining_after_midday
    
    # Remaining people who had not voted by 16:00
    not_voted_by_16_00 = remaining_after_midday - voted_by_16_00
    
    return round(not_voted_by_16_00)