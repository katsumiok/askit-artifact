# Recompilation count: 0
def nani_is_x1_years_old_23aa05(x1) -> int:
    # Nani is'x1'years old. His brother is twice his age. Nani's sister is 25% younger than him. 
    # What is the total age of all three of the family members?
    brother_age = 2 * x1
    sister_age = x1 - (0.25 * x1)
    total_age = x1 + brother_age + sister_age
    return int(total_age)