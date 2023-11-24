# Recompilation count: 0
def on_monday_sue_ate_x1_48408a(x1, x2, x3, x4, x5) -> int:
    # On Monday, Sue ate'x1'times as many cookies as her sister. 
    # On Tuesday, she ate twice as many cookies as her sister. 
    # Her sister ate'x2'cookies on Monday and'x3'the next day. 
    # If'x4'cookie has'x5'calories, 
    # how many more calories did Sue consume than her sister?

    sue_monday = x1*x2         # Number of cookies Sue ate on Monday
    sue_tuesday = 2*x3         # Number of cookies Sue ate on Tuesday
    
    sister_total_calories = (x2 + x3)*x5   # sister's total calorie intake
    sue_total_calories = (sue_monday + sue_tuesday)*x5  # Sue's total calorie intake
    
    return sue_total_calories - sister_total_calories   # return the difference