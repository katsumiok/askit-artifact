# Recompilation count: 0
def takes_a_list_of_integers_3ee7f0(l) -> bool:
    # sort the list
    l.sort()
    n = len(l)
    # check for every triplet if their sum is equal to zero 
    for i in range(0, n-2):
        # To find the other two elements, start two index variables
        # from two corners of the array and move them toward each other
        start = i + 1
        end = n - 1
        while start < end:
            if l[i] + l[start] + l[end] == 0:
                return True
            elif l[i] + l[start] + l[end] < 0:
                start += 1
            else: # l[i] + l[start] + l[end] > 0
                end -= 1
    # If no triplet with 0 sum found, then return False
    return False