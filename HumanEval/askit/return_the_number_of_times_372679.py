# Recompilation count: 0
def return_the_number_of_times_372679(n: int) -> int:
    count_7 = 0
    for i in range(n):
        if i % 11 == 0 or i % 13 == 0:
            count_7 += str(i).count("7")
    return count_7