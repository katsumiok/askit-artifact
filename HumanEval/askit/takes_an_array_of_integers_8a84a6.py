# Recompilation count: 1
def takes_an_array_of_integers_8a84a6(arr) -> int:
    count = 0
    for number in arr:
        sum_of_digits = sum(int(digit) for digit in str(abs(number)))
        if number < 0:
            sum_of_digits = sum_of_digits - 2*int(str(abs(number))[0])
        if sum_of_digits > 0:
            count += 1
    return count