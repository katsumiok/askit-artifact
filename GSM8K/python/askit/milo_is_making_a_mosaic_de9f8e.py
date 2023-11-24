# Recompilation count: 0
def milo_is_making_a_mosaic_de9f8e(x1) -> int:
    # Milo is making a mosaic with chips of glass. 
    # It takes twelve glass chips to make every square inch of the mosaic. 
    # A bag of glass chips holds 'x1' chips. 
    # Milo wants his mosaic to be three inches tall. 
    # If he has two bags of glass chips, how many inches long can he make his mosaic?
    
    total_chips = 2 * x1  # total glass chips from two bags
    chips_per_square_inch = 12  # chips required for one square inch
    height_of_mosaic = 3  # height of mosaic in inches

    # Calculate the total square inches Milo can cover with his chips
    total_square_inches = total_chips // chips_per_square_inch

    # Since the height is fixed at 3 inches, the length will be the total
    # square inches divided by the height
    length_of_mosaic = total_square_inches // height_of_mosaic

    # Return the length of the mosaic Milo can create
    return length_of_mosaic