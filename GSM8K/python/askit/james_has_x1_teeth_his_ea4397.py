# Recompilation count: 4
def james_has_x1_teeth_his_ea4397(x1, x2, x3) -> int:
    # James has'x1'teeth. His dentist drills'x2'of them and caps'x3'more teeth than he drills. What percentage of James' teeth does the dentist fix?
    
    #the dentist drills x2 teeth and then caps x3 more teeth than he drills
    #so the total teeth fixed are x2(drilled) + x2+x3(capped)
    
    total_teeth_fixed = x2 + (x2 + x3) 
    
    #percentage of James' teeth does the dentist fix
    #formula = (total teeth fixed/ total teeth) * 100
    percentage_fixed = (total_teeth_fixed/x1) * 100
    
    #returning the percentage as int
    return int(percentage_fixed)