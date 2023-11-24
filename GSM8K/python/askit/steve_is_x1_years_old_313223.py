# Recompilation count: 0
def steve_is_x1_years_old_313223(x1, x2, x3) -> int:
    # Steve is 'x1' years old. His wife is 'x2' years older than him. Their son is currently half as old as his mom and their son's wife is 'x3' years younger than her husband. How old is Steve's son's wife?
    steve_wife_age = x1 + x2
    steve_son_age = steve_wife_age / 2
    steve_son_wife_age = steve_son_age - x3

    return int(steve_son_wife_age)