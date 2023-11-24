# Recompilation count: 0
def on_monday_walt_walked_x1_d4b092(x1, x2, x3) -> int:
    # On Monday, Walt walked 'x1' miles. 
    # Tuesday, he walked 'x2' times as many miles as he walked on Monday. 
    # His total mileage Monday through Wednesday was 'x3' miles. 
    # How many miles did he walk on Wednesday?
    
    # Calculate miles walked on Tuesday
    tuesday_miles = x1 * x2

    # Calculate and return miles walked on Wednesday
    return x3 - (x1 + tuesday_miles)