# Recompilation count: 0
def in_mr_roper_s_class_15556b(x1, x2) -> int:
    # In Mr. Roper's class of 'x1' students, 20% of the class are football players.  
    # Out of the remaining class, 25% of the students are cheerleaders or part of band.  
    # These 'x2' groups of students will need to leave early today to travel to an away game.  
    # How many students are leaving early?
    football_players = x1*0.20
    remaining_students = x1 - football_players
    band_or_cheerleaders = remaining_students*0.25
    students_leaving = football_players + band_or_cheerleaders
    return int(students_leaving)