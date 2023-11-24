# Recompilation count: 0
def chris_is_way_behind_on_80e38c(x1, x2, x3) -> int:
    # Chris is way behind on his math homework. He has'x1'math problems to complete in total. 
    # He completes'x2'problems on Monday night. On Tuesday, he completes'x3'times as many problems as he did on Monday. 
    # On Wednesday, he completes one-quarter of the remaining math problems. 
    # How many math problems does he have left to complete on Thursday?
    
    # Monday
    remaining_problems = x1 - x2
    
    # Tuesday
    tuesday_problems = x2 * x3 
    remaining_problems -= tuesday_problems
    
    # Wednesday
    wednesday_problems = remaining_problems // 4 
    remaining_problems -= wednesday_problems
    
    # Now return the remaining problems
    return remaining_problems