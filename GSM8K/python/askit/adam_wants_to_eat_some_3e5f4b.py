# Recompilation count: 0
def adam_wants_to_eat_some_3e5f4b(x1, x2, x3, x4, x5) -> int:
    # Adam wants to eat some sliced apples. A large apple can be sliced into'x1'pieces, 
    # and a small apple can be sliced into'x2'pieces. Adam decides to slice'x3'large 
    # and'x4'small apples and then eats'x5'slices. 
    # How many apple slices are left? 
    
    # Calculate total slices from large and small apples
    total_slices = x1*x3 + x2*x4  
    
    # Subtract the slices Adam ate
    slices_left = total_slices - x5 
    
    return slices_left