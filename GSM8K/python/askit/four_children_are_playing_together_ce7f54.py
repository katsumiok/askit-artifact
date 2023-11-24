# Recompilation count: 0
def four_children_are_playing_together_ce7f54(x1, x2) -> int:
    # Four children are playing together—Akbar, Alessandro, Helene, and Wilfred. Helene is twice as old as the average age of the group, and the total age of the children is 20. If Akbar is'x1'years old and Alessandro is'x2'years old, calculate the age of Wilfred.

    # Calculate the total age of Akbar and Alessandro
    total_age_Akbar_Alessandro = x1 + x2

    # Since the total age of the children is 20 and Helene's age is twice the average, 
    # that means the average age is 20/4=5. Therefore, Helene is 2*5=10 years old.

    # Subtract the total age of Helene, Akbar and Alessandro from the total age of the children to get Wilfred's age
    wilfred_age = 20 - (total_age_Akbar_Alessandro + 10)
    
    return wilfred_age