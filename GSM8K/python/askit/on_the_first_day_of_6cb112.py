# Recompilation count: 0
def on_the_first_day_of_6cb112(x1, x2, x3, x4) -> int:
    # On the first day of school, Ava sees that her friends Cole and Xavier have both grown a lot over the summer. 
    # Xavier was'x1'feet tall and grew'x2'inches. Cole was'x3'inches tall and grew'x4'inches over the summer. 
    # What is the difference between Cole and Xavier’s height now?

    # First convert Xavier's height from feet to inches and add the growth
    xavier_height = x1 * 12 + x2
    # Add Cole's growth to his initial height
    cole_height = x3 + x4
    # Return the absolute difference between Cole and Xavier’s height now
    return abs(xavier_height - cole_height)