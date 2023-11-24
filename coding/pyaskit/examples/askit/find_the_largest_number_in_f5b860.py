# Recompilation count: 0
def find_the_largest_number_in_f5b860(ns) -> int:
    # Find the largest number in 'ns'.
    largest = ns[0]
    for num in ns:
        if num > largest:
            largest = num
    return largest