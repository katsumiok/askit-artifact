# Recompilation count: 0
def given_an_array_of_integers_cfee2a(nums) -> int:
    n = len(nums)
    min_sum = float('inf')
    for i in range(n):
        for j in range(i, n):
            min_sum = min(min_sum, sum(nums[i:j+1]))
    return min_sum