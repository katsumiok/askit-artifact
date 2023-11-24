# Recompilation count: 0
def the_elevator_in_jack_s_79aed9(x1, x2, x3) -> int:
    # The elevator in Jack's building supports a maximum load of'x1'kg. An adult weighs an average of'x2'kg. 
    # If Jack rides the elevator with'x3'other adults, by how much will they have exceeded the maximum load of the elevator?
    
    #First find the total weight of the adults
    total_weight = x2 * (x3 + 1)   #Jack is also an adult so we add 1 in x3

    #Then subtract the maximum weight the elevator can support to know by how much they have exceeded
    exceeded_weight = total_weight - x1

    #Return the exceeded weight 
    return exceeded_weight