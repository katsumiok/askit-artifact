# Recompilation count: 0
def will_buys_x1_oranges_when_9cb491(x1, x2, x3) -> int:
    # Will buys 'x1' oranges. When he gets home, he asks his 'x2' sons to wash as many oranges as they are years old. 
    # The oldest son is 'x3' years old, the youngest is half as old as the oldest. How many oranges are left unwashed?
    oldest_son_age = x3
    youngest_son_age = x3 / 2 
    oranges_washed = oldest_son_age + youngest_son_age
    oranges_left = x1 - oranges_washed
    return int(oranges_left) 