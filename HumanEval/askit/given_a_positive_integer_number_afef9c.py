# Recompilation count: 0
def given_a_positive_integer_number_afef9c(number) -> str:
    numeral_map = [(1000, 'm'), (900, 'cm'), (500, 'd'), (400, 'cd'), 
                   (100, 'c'), (90, 'xc'), (50, 'l'), (40, 'xl'),
                   (10, 'x'), (9, 'ix'), (5, 'v'), (4, 'iv'), (1, 'i')]
                   
    result = ""
    
    while number > 0:
        for i, numeral in numeral_map:
            while number >= i:
                result += numeral
                number -= i
            
    return result