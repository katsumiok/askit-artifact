# Recompilation count: 0
def mazie_has_x1_marbles_and_be57e5(x1, x2, x3) -> int:
    # Mazie has 'x1' marbles and gives them to twins, Dallas and Darla. 
    # If Dallas has a total of 'x2' marbles after dropping 'x3' of them in the playground, 
    # how many did Mazie give to Darla?
    # Total number of marbles Dallas had before dropping is x2 + x3
    # So, number of marbles Darla has is x1 - (x2 + x3)
    return x1 - (x2 + x3)