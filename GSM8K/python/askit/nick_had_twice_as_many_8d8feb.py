# Recompilation count: 0
def nick_had_twice_as_many_8d8feb(x1, x2) -> int:
    # Nick had twice as many candies as George. Then George ate 'x1' candies. Now George has 'x2' candies left. How many candies does Nick have?
    # George originally had 'x1' + 'x2' candies, this means Nick had 2 * ('x1' + 'x2') candies, 
    # as Nick did not eat any candies, he still has the same amount. 
    return 2 * (x1 + x2)