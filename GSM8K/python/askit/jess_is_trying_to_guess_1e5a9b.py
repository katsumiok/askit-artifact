# Recompilation count: 0
def jess_is_trying_to_guess_1e5a9b(x1, x2) -> int:
    # Jess is trying to guess the number of blue jellybeans in a jar. She can see that there are 'x1' green jelly beans 
    # and twice as many red jelly beans. The rest of the jellybeans are blue jelly beans. 
    # If there are a total of 'x2' jelly beans in total, how many blue jellybeans are there?
    red_jelly_beans = 2 * x1
    total_green_and_red = red_jelly_beans + x1
    blue_jelly_beans = x2 - total_green_and_red
    return blue_jelly_beans