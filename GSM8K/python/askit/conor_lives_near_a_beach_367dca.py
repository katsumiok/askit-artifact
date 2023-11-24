# Recompilation count: 0
def conor_lives_near_a_beach_367dca(x1, x2, x3) -> int:
    # Calculate the total number of people Conor saw on the first three days
    first_three_days = x1 + (x1 + x2) + 2 * (x1 + x2)
    # Calculate the total number of people Conor saw in the rest four days by multiplying average by 4
    rest_of_days = x3 * 4
    # Sum to find the total number of people Conor saw in the week
    total_people = first_three_days + rest_of_days

    return total_people