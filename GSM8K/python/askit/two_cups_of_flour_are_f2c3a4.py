# Recompilation count: 0
def two_cups_of_flour_are_f2c3a4(x1, x2) -> int:
    # Two cups of flour are needed to make a dozen cookies. Carla is making 'x1' cookies today and 'x2' cookies tomorrow. 
    # She will need 2 cups for every 12 cookies, so divide the total number of cookies by 12 and then multiply by 2.
    
    total_cookies = x1 + x2
    total_flour = (total_cookies/12) * 2
    # as the function should return an integer value, we use floor division to get the whole number of cups needed
    return total_flour//1