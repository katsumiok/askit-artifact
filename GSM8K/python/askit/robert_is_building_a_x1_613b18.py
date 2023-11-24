# Recompilation count: 0
def robert_is_building_a_x1_613b18(x1, x2, x3) -> int:
    # Robert is building a'x1'foot long,'x2' foot wide, rectangular wooden fence around his garden.  
    # He needs'x3'wood slats for every foot of fencing he builds.  
    # The perimeter of the rectangular fence is (2 * (length + breadth)). Here length and breadth are 'x1' and 'x2' respectively.
    # Multiply this perimeter by 'x3' to get the total number of wooden slats needed.
    
    perimeter = 2 * (x1 + x2)
    total_wooden_slats = perimeter * x3
    
    return total_wooden_slats