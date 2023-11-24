# Recompilation count: 0
def for_an_array_arr_determine_0d2f8d(arr) -> bool:
    # For an array 'arr', determine if it is possible to get an array sorted in non-decreasing order by performing right shift operations.
    # If it is possible to obtain the sorted array by performing the operation, then return True else return False.
    # If the given array is empty then return True.

    if not arr:
        return True
    
    n = len(arr)
    arr2 = sorted(arr)
    
    for i in range(n):
        if arr == arr2:
            return True
        arr.insert(0, arr.pop())
    
    return False