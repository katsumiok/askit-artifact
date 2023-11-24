# Recompilation count: 0
def you_are_given_a_non_0d959e(lst) -> int:
    counters = {}
    for num in lst:
        if num not in counters:
            counters[num] = 1
        else:
            counters[num] += 1

    max_value = -1
    for num, freq in counters.items():
        if num > max_value and freq >= num:
            max_value = num

    return max_value