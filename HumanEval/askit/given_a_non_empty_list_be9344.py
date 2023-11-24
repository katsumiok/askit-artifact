# Recompilation count: 0
def given_a_non_empty_list_be9344(lst) -> int:
    return sum(lst[i] for i in range(len(lst)) if i % 2 == 0 and lst[i] % 2 == 1)