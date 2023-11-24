# Recompilation count: 0
def duncan_s_age_eight_years_8b963c(x1, x2) -> int:
    # Duncan's age eight years ago was two times Adam's age four years ago.
    # So, Adam's age four years ago = Duncan's age eight years ago / 2
    # Hence, Adam's present age = Adam's age four years ago + 4
    adam_present_age = (x1 - 8) // 2 + 4
    
    # Adam's age in 'x2' years = Adam's present age + x2
    return adam_present_age + x2