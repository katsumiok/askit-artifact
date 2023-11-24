# Recompilation count: 0
def terri_is_knitting_a_sweater_6961f8(x1) -> int:
    # Terri is knitting a sweater with two sleeves, a collar, and a decorative rosette. The body of the sweater takes 'x1' stitches to complete, the collar takes a tenth of that number of stitches, and the rosette takes twice as many as the collar. The whole sweater is an 1800-stitch project. How many stitches does each sleeve take?
    
    collar = x1 / 10
    rosette = collar * 2
    total_stitches_for_body_collar_and_rosette = x1 + collar + rosette
    total_stitches_for_both_sleeves = 1800 - total_stitches_for_body_collar_and_rosette
    
    # Since there are two sleeves, we divide the total stitches for both sleeves by 2 to get the stitches for each sleeve.
    each_sleeve = total_stitches_for_both_sleeves / 2
    
    return int(each_sleeve)