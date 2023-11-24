# Recompilation count: 0
def mike_s_teacher_leaves_as_dd5d3b(x1, x2) -> int:
    # Mike's teacher, leaves as homework the reading of a 200-page book. The assignment is to be completed within'x1'days. Mike plans to read'x2'pages a day. How many days before the deadline will Mike finish his reading?

    pages_to_read = 200
    days_needed = pages_to_read // x2

    # If Mike cannot read exactly 'x2' pages a day, i.e., pages_to_read is not divisible by 'x2', he will need one more day to finish the remainder of the pages
    if pages_to_read % x2 != 0: 
        days_needed += 1

    days_before_deadline = x1 - days_needed
    
    return max(days_before_deadline, 0)  # If Mike is unable to finish before the deadline, return 0