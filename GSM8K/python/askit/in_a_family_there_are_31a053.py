# Recompilation count: 0
def in_a_family_there_are_31a053(x1, x2, x3) -> int:
    # In a family, there are 'x1' brothers and 'x2' sisters. All sisters are the same age, which is 16. 
    # One of the brothers is 'x3' years old, which is half the age of the older brother. 
    # What is the total age of all these siblings?

    # The age of the older brother is twice the age of the younger brother, so it's x3*2
    older_brother_age = x3*2 

    # Total brothers' age is the sum of the younger brother's age, older brother's age and the age of the rest of the brothers (assuming they are all the same age as the younger brother).
    total_brothers_age = x3 + older_brother_age + x3*(x1-2)

    # Total sisters' age. Note that we subtract 1 from x2 because we already counted one sister's age (16)
    total_sisters_age = x2*16

    # total siblings' age
    total_age = total_brothers_age + total_sisters_age
    
    return total_age