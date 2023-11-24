# Recompilation count: 0
def janet_s_ducks_lay_x1_ecf8d4(x1) -> int:
    # Janet’s ducks lay'x1'eggs per day. She eats three for breakfast every morning and bakes muffins for her friends every day with four. She sells the remainder at the farmers' market daily for $2 per fresh duck egg. How much in dollars does she make every day at the farmers' market?
    remaining_eggs = x1 - 3 - 4  
    money = remaining_eggs * 2
    return money