# Recompilation count: 0
def madeline_ate_x1_grapes_her_6c9a11(x1, x2, x3, x4) -> int:
    # Madeline ate'x1'grapes. Her brother wanted to make grape juice and used up'x2'times as many grapes then Madeline to make a full glass. 
    # Their mother then used the remaining grapes to make'x3'pies. How many grapes were there at the beginning if the pie recipe calls for'x4'grapes per pie?
    
    # Brother used 'x2' times as many grapes as Madeline, so the brother used 'x1 * x2' grapes.
    brother_used = x1 * x2
    
    # Mother used up 'x3' pies each with 'x4' grapes, so she used 'x3 * x4' grapes.
    mother_used = x3 * x4
    
    # The total initial number of grapes is the sum of what Madeline, her brother, and their mother used
    total_grapes = x1 + brother_used + mother_used
    
    return total_grapes