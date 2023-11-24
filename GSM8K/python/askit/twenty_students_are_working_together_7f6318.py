# Recompilation count: 0
def twenty_students_are_working_together_7f6318() -> int:
    # Twenty students are working together to raise money for a charity. Each earns the same amount. The charity raises a total of $175,000. $50,000 comes from organizations and the rest from the students. How much did each student raise?
    
    # Total amount raised by the charity
    total_amt = 175000  
    
    # Amount raised by organizations
    org_amt = 50000  
    
    # Amount raised by the students is total amount minus the amount from organizations
    students_amt = total_amt - org_amt 
    
    # As all students raised equal amount, each student raised is total amount raised by students divided by the number of the students which is 20
    each_student_amt = students_amt // 20  
    
    return each_student_amt