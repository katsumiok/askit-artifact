# Recompilation count: 0
def mark_makes_custom_dog_beds_d9f823(x1, x2, x3, x4) -> int:
    # Mark makes custom dog beds. 
    # A bed for a Rottweiler takes'x1'pounds of stuffing, 
    # a bed for a chihuahua takes'x2'pounds of stuffing, 
    # and a bed for a collie takes the average amount of stuffing between the first two kinds of beds. 
    # How many pounds of stuffing does Mark need to make'x3'chihuahua beds and'x4'collie beds?
    
    # Calculate stuffing for collie bed
    collie_bed_stuffing = (x1 + x2)/2
    
    # Calculate total stuffing
    total_stuffing = (x2 * x3) + (collie_bed_stuffing * x4) 

    return total_stuffing