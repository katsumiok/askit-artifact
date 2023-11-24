# Recompilation count: 0
def carlos_jim_and_carrey_were_68d90a(x1, x2) -> int:
    # Jim collected 'x1' seashells, which was 'x2' more than what Carlos collected. 
    # Carlos collected twice as many as Carrey. 

    # Carlos collected 'x2' less than Jim
    carlos = x1 - x2

    # Carrey collected half of what Carlos collected
    carrey = carlos // 2

    # The total number of seashells is the sum of what each person collected
    total_seashells = x1 + carlos + carrey

    # They gathered all their seashells and divided them equally between themselves.
    seashells_per_person = total_seashells // 3

    return seashells_per_person