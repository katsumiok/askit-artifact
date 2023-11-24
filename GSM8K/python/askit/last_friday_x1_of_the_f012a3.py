# Recompilation count: 0
def last_friday_x1_of_the_f012a3(x1, x2, x3) -> int:
    # Last Friday,'x1' of the 'x2' teachers at Rydell Elementary School were sick.
    # There were 'x3' substitute teachers called in to help. 
    # How many teachers were at school that day?
    
    # number of teachers not sick that day
    not_sick_teachers = x2 - x1
    # total number of teachers including substitutes
    total_teachers = not_sick_teachers + x3
    
    return total_teachers