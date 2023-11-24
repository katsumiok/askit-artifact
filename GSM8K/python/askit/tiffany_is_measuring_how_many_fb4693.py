# Recompilation count: 0
def tiffany_is_measuring_how_many_fb4693(x1, x2) -> int:
    # Calculate the total number of riders who can stay upright
    total_upright_riders = x2 * 0.25

    # Calculate the number of women who can stay upright
    women_upright = total_upright_riders * 0.6

    # Subtract this from the total upright riders to find the number of men
    men_upright = total_upright_riders - women_upright
   
    # return the number of men who can stay upright as integer
    return int(men_upright)