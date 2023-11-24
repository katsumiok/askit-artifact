# Recompilation count: 0
def given_a_list_of_numbers_88ca65(lst) -> int:
    result = 0
    for num in lst:
        if num >= 0 and type(num) == int and num % 2 != 0:
            result += num**2
    return result