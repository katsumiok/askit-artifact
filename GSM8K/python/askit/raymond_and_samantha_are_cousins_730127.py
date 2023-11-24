# Recompilation count: 2
def raymond_and_samantha_are_cousins_730127(x1) -> int:
    # Raymond and Samantha are cousins. Raymond was born'x1'years before Samantha. 
    # Raymond had a son at the age of 23. If Samantha is now 31, how many years ago was Raymond's son born?

    # First, find Raymond's current age by adding the years he was born before Samantha to Samantha's current age
    raymond_current_age = x1 + 31

    # Then, subtract the age Raymond was when he had a son from his current age to find how many years ago his son was born
    years_since_son_born = raymond_current_age - 23

    return years_since_son_born