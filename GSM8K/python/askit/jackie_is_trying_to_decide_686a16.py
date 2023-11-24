# Recompilation count: 0
def jackie_is_trying_to_decide_686a16(x1) -> int:
    # Jackie is trying to decide whether to do her taxes herself or hire an accountant.
    # If she does the taxes herself, she'll be able to do 'x1' fewer hours of freelance work,
    # losing $35/hour in missed income.
    # The accountant charges $90. How much more money will she have if she hires the accountant?
    
    # Money lost if she does the taxes herself
    herself_lost = x1 * 35
    
    # Money lost if she hires the accountant
    accountant_lost = 90
    
    # How much more money will she have if she hires the accountant?
    more_money = herself_lost - accountant_lost
    
    return more_money