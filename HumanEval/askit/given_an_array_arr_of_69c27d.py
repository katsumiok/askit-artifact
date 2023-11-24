# Recompilation count: 0
def given_an_array_arr_of_69c27d(arr) -> int:
    count = 0
    i = 0
    j = len(arr) - 1

    while i < j:
        if arr[i] != arr[j]:
            count += 1
        i += 1
        j -= 1

    return count