# Recompilation count: 0
def takes_an_array_of_numbers_aa8ef2(nums) -> int:
    count = 0
    for num in nums:
        str_num = str(abs(num))
        if num > 10 and int(str_num[0]) % 2 != 0 and int(str_num[-1]) % 2 != 0:
            count += 1
    return count