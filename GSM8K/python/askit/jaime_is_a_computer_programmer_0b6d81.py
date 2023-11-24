# Recompilation count: 0
def jaime_is_a_computer_programmer_0b6d81(x1) -> int:
    # Jaime is a computer programmer for a company that currently has employed'x1'people. 
    # Senior programmers are paid $400 more than junior programmers. 
    # If the number of Junior programmers is 2/5 of the total number of employees, 
    # and they are each paid $2000 per month, calculate the total amount of money 
    # the company pays to all the programmers per month.
    
    num_junior_programmers = (2/5) * x1
    num_senior_programmers = x1 - num_junior_programmers
    
    junior_payment = num_junior_programmers * 2000
    senior_payment = num_senior_programmers * (2000 + 400) # Senior programmers are paid $400 more
    
    total_payment = junior_payment + senior_payment
    return int(total_payment) # Return the total amount as integer