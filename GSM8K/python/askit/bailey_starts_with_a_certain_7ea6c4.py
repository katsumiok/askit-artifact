# Recompilation count: 0
def bailey_starts_with_a_certain_7ea6c4(x1, x2) -> int:
    # Bailey starts with a certain amount of money. Then she receives a weekly allowance of $5 for 'x1' weeks. At the end of the 'x2' weeks, if she has a total of $100, how much money did Bailey start with?
    # Firstly, Bailey received 'x1' weeks of allowance, which equals to 'x1' * $5
    # At the end of x2 weeks, she has $100. We can subtract her allowance money from $100 to find out her starting money
    starting_money = 100 - x1 * 5
    return starting_money