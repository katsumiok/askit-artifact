# Recompilation count: 0
def jackson_is_planting_tulips_he_53307e(x1, x2, x3, x4) -> int:
    # Jackson is planting tulips. He can fit'x1'red tulips in a row and'x2'blue tulips in a row. 
    # If Jackson buys'x3'red tulips and'x4'blue tulips, how many rows of flowers will he plant?
    
    # Calculate the number of rows for red and blue tulips separately and add them up
    red_rows = x3 // x1 if x3 % x1 == 0 else x3 // x1 + 1
    blue_rows = x4 // x2 if x4 % x2 == 0 else x4 // x2 + 1
    
    return red_rows + blue_rows