# Recompilation count: 0
def emil_is_x1_years_old_3a51ef(x1) -> int:
    # Emil is'x1'years old now. When he turns 24, he will be half the age of his dad but twice as old as his brother.  What is the sum of the ages of his dad and his brother now?
    dads_age_when_emil_is_24 = 24 * 2  # Emil will be half the age of his dad when he turns 24
    brothers_age_when_emil_is_24 = 24 // 2  # Emil will be twice as old as his brother when he turns 24
    
    dads_current_age = dads_age_when_emil_is_24 - (24 - x1)  # calculate dad's current age based on Emil's current age
    brothers_current_age = brothers_age_when_emil_is_24 - (24 - x1)  # calculate brother's current age based on Emil's current age
    
    return dads_current_age + brothers_current_age