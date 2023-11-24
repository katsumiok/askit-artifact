# Recompilation count: 0
def in_a_family_of_5_e08891() -> int:
    # In a family of 5, three people eat three eggs each day 
    # while the rest eat two eggs each day. 
    # If they eat eggs every day, how many eggs will the family consume in a week?
    
    # Those who eat three eggs each day
    three_eggs_eaters = 3 * 3 * 7   # three persons, three eggs each and 7 days

    # The rest who eat two eggs each day
    two_eggs_eaters = 2 * 2 * 7    # two persons, two eggs each and 7 days

    # Total eggs consumed by the family in a week
    total_eggs = three_eggs_eaters + two_eggs_eaters

    return total_eggs