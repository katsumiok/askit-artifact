# Recompilation count: 0
def the_power_goes_out_in_fd0053(x1, x2, x3, x4) -> int:
    # The power goes out in Brianna's house one night so she and her family gather all their candles and flashlights. 
    # There are'x1'rooms in the house and 'x2' people living there, including Brianna. 
    # There is a flashlight for every person to carry and two for each room. 
    # They have a variety of candles available; 'x3' small candles each for half the rooms and 'x4' medium candles each for the other half of the rooms. 
    # With everything combined, how many candles and flashlights are Brianna's family using when the lights go out?
    
    total_flashlights = x2 + x1 * 2
    total_candles = (x3 * (x1 // 2)) + (x4 * ((x1 + 1) // 2))
    
    return total_flashlights + total_candles