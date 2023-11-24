# Recompilation count: 0
def jenny_is_dividing_up_a_653875(x1, x2) -> int:
    # Jenny is dividing up a pizza with 'x1' slices. She gives 1/3 to Bill and 1/4 to Mark.
    # If Jenny eats 'x2' slices, how many slices are left?
    
    bill_slices = x1 / 3
    mark_slices = x1 / 4
    left_slices = x1 - bill_slices - mark_slices - x2
    return round(left_slices)