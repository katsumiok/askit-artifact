# Recompilation count: 0
def given_a_non_empty_list_f17534(lst) -> int:
    evens_at_odd_indices = [lst[i] for i in range(len(lst)) if i % 2 != 0 and lst[i] % 2 == 0]
    if len(evens_at_odd_indices) > 0:
        return sum(evens_at_odd_indices)
    else:
        return 0

print(given_a_non_empty_list_f17534([4, 2, 6, 7])) # 2