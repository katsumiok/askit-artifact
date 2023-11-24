# Recompilation count: 0
def tanya_is_teaching_at_school_6a4fd9(x1, x2, x3, x4, x5) -> int:
    # Tanya is teaching at school. She earns $15 for every hour and an additional $5 per day if she teaches more than 'x1'classes. 
    # On Monday she teaches 'x2'classes for 'x3'hours, and on Wednesday 'x4'classes for 'x5'hours. 
    # How much did Tanya earn for these two days of teaching?

    total_pay = 0 

    # pay for Monday
    monday_hours_pay = x3 * 15
    if x2 > x1:
        monday_hours_pay += 5
    total_pay += monday_hours_pay

    # pay for Wednesday
    wednesday_hours_pay = x5 * 15
    if x4 > x1:
        wednesday_hours_pay += 5
    total_pay += wednesday_hours_pay

    return total_pay