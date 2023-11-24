# Recompilation count: 0
def an_ice_cream_truck_is_bae44c(x1, x2, x3) -> int:
    # An ice cream truck is traveling through a neighborhood. Children from various homes have started chasing the truck and, by the time the truck has reached the end of the first street, there are'x1'children it. On the second street, each child is joined by another child and on the third street, each child in the existing group is joined by another'x2'children. The original'x3'children then give up and leave the group. How many children are now following the truck?
    
    # number of children at the end of the second street
    second_street = x1*2
    
    # number of children at the end of the third street
    third_street = second_street*(x2+1)
    
    # number of children remaining after the original x3 left
    children_remaining = third_street - x3
    
    return children_remaining