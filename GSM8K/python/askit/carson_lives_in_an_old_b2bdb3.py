# Recompilation count: 0
def carson_lives_in_an_old_b2bdb3(x1, x2, x3, x4) -> int:
    # Carson lives in an old house where the pipes will freeze if the temperature inside the house falls below'x1'degrees.
    # Every log of wood Carson burns heats the house up by'x2'degrees. 
    # If it was'x3'degrees during the day, and it's'x4'degrees colder during the night compared to the day, 
    # how many logs does Carson need to burn to prevent the pipes from freezing?

    # calculate the temperature during the night
    temp_night = x3 - x4

    if temp_night >= x1:
        # if the temperature during the night is above the freezing point of the pipes, Carson doesn't need to burn any logs
        return 0
    else:
        # if the temperature during the night is below the freezing point of the pipes, 
        # Carson needs to burn logs until the temperature reaches the freezing point.
        logs_needed = (x1 - temp_night) / x2
        return int(logs_needed)