# Recompilation count: 0
def dylan_attended_a_wedding_where_c15c18(x1, x2, x3) -> int:
    # Dylan attended a wedding where there were'x1'guests in the reception. Each guest brought a plate of'x2'cookies. 
    # The bride decided to give 1/2 of the cookies to the church next door as a thank you for helping in the wedding reception. 
    # If each person in the church next door got'x3'cookies, how many people were in the church next door?
    
    total_cookies = x1 * x2    # Total number of cookies at the wedding
    half_cookies = total_cookies / 2  # Half of the cookies given to the church
    church_people = half_cookies / x3 # Number of people in the church
    
    return int(church_people)