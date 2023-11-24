# Recompilation count: 0
def charisma_works_for_x1_hours_ff4d59(x1, x2, x3) -> int:
    # Charisma works for 'x1' hours every day. She has a timer to remind her to get up and 
    # walk for 'x2' minutes every hour she’s at work. After 'x3' days at the office, 
    # how many minutes has she walked?
    
    total_hours_worked = x1 * x3   # Total hours worked is equal to hours worked per day multiplied by number of days
    total_minutes_walked = x2 * total_hours_worked   # Total minutes walked is equal to minutes walked per hour multiplied by total hours worked
    
    return total_minutes_walked