# Recompilation count: 0
def amalia_megan_and_dior_divided_54102c(x1, x2, x3) -> int:
    # Amalia, Megan, and Dior divided the home chores so that each person had something to do while the others were working. Amalia's work was to mow the lawn, which took her'x1'hours. Megan had to walk the dog and this took her'x2'hours longer than Amalia to complete her chore. Dior's work was to do laundry and she took well over'x3'hours longer than the time Amalia took to mow the lawn. Calculate the total time they all took to do their chores altogether.
    total_time = x1 + (x1 + x2) + (x1 + x3)
    return total_time