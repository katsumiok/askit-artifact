# Recompilation count: 0
def andrew_bakes_x1_mini_cinnamon_4e54b4(x1, x2, x3, x4) -> int:
    # Andrew bakes'x1'mini cinnamon rolls and'x2'mini blueberry muffins. A normal cinnamon roll has'x3'calories and a normal blueberry muffin has'x4'calories. 
    # If a mini pastry has 1/3rd of the calories of a normal version, 
    # how many calories do the pastries he baked have?
    
    # calculate the total calories of mini cinnamon rolls and mini muffins
    mini_cinnamon_calories = x1 * (x3 / 3)
    mini_blueberry_calories = x2 * (x4 / 3)

    # return the total calories
    return mini_cinnamon_calories + mini_blueberry_calories