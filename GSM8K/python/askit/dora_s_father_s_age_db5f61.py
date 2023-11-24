# Recompilation count: 0
def dora_s_father_s_age_db5f61(x1) -> int:
    # Dora's father's age is eight more than twice Dora's age. 
    father_s_age = 2 * x1 + 8
    
    # Dora's mother is four years younger than Dora's father.
    mother_s_age = father_s_age - 4
    
    # calculate the total combined age of Dora, her father, and her mother.
    total_age = x1 + father_s_age + mother_s_age

    return total_age