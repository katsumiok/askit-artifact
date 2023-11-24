# Recompilation count: 1
def for_a_new_year_s_23a8f9(x1, x2) -> int:
    # For a New Year's resolution, Andy wants to lose'x1'lbs. by his birthday, which is July 19th.
    # Today is December 31st. 
    # If Andy needs to burn'x2'calories to lose a pound, how much of a calorie deficit (net amount of calories burned vs. calories consumed) does he need each day to reach his goal?
    
    # Total number of days between Dec 31st and July 19th of next year
    total_days = 200 #31 days in January, 28 in February, 31 in March, 30 in April, 31 in May, 30 in June, 19 in July

    #Calculate total number of calories to be burned
    total_calories_to_burn = x1 * x2

    #Calculate daily calorie deficit
    daily_calorie_deficit = total_calories_to_burn / total_days

    return daily_calorie_deficit