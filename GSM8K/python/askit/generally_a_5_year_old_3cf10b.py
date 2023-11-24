# Recompilation count: 0
def generally_a_5_year_old_3cf10b(x1, x2, x3, x4, x5, x6) -> int:
    # Generally, a 5-year-old avocado tree produces'x1'fruits, 
    # a 6-year-old one produces'x2'times the initial amount of fruits, 
    # a 7-year-old one produces'x3'times the initial amount, 
    # and an 8-year-old produces'x4'fruits less than a 10-year-old one. 
    # During the ninth year, the avocado tree doesn't produce any fruit, 
    # and then a 10-year-old tree produces'x5'times the initial amount of fruits. 
    
    # How many total fruits can an avocado tree produce during its'x6'years of life?

    if x6 < 5: 
        return 0
    elif x6 == 5: 
        return x1
    elif x6 == 6:
        return x1 + x1*x2
    elif x6 == 7:
        return x1 + x1*x2 + x1*x3
    elif x6 == 8:
        return x1 + x1*x2 + x1*x3 + x1*x5 - x4
    elif x6 == 9:
        return x1 + x1*x2 + x1*x3 + x1*x5 - x4
    else: # x6 >= 10
        return x1 + x1*x2 + x1*x3 + x1*x5 - x4 + x1*x5