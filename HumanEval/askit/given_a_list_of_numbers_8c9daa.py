# Recompilation count: 0
def given_a_list_of_numbers_8c9daa(lst) -> bool:
    # Check if list is sorted and no more than 1 duplicate exists
    return lst == sorted(lst) and all(lst.count(i) <= 2 for i in lst)