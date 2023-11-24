# Recompilation count: 0
def at_the_beginning_of_the_6976b0(x1, x2, x3) -> int:
    # At the beginning of the party, there were'x1'men and'x2'women. After an hour, 1/4 of the total number of people left. How many women are left if'x3'men stayed at the party?
    total_people = x1 + x2
    people_left = total_people - total_people / 4
    women_left = people_left - x3
    return int(women_left)