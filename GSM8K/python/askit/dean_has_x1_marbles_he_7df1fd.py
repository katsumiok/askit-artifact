# Recompilation count: 0
def dean_has_x1_marbles_he_7df1fd(x1, x2) -> int:
    # Dean has 'x1' marbles. He gives 1/5 of them to Jamie and gives 'x2' to Donald. How many marbles are left for Dean?
    marbles_to_jamie = x1 / 5
    marbles_left_with_dean = x1 - marbles_to_jamie - x2
    return int(marbles_left_with_dean)