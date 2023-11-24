# Recompilation count: 0
def aiden_and_x1_of_his_9c4fcc(x1, x2) -> int:
    # Aiden and'x1'of his friends are going to see a film at the cinema, and meet up with'x2'more friends there. 
    # They each save a seat and then buy enough drinks and snacks to fill the seats. Each seat has enough room 
    # to hold one person, two drinks, and three snacks. If drinks and snacks cost $2 each, how much money, 
    # in dollars, has the group spent overall on snacks and drinks?

    total_people = 1 + x1 + x2  # 1 for Aiden, x1 for his friends, and x2 for more friends
    total_drinks_and_snacks = total_people * (2 + 3)  # Each person buys 2 drinks and 3 snacks
    total_cost = total_drinks_and_snacks * 2  # Each drink/snack costs $2
    return total_cost