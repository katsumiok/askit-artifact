# Recompilation count: 0
def count_the_number_of_vowels_47e5a8(s) -> int:
    # Count the number of vowels in 's'.
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0
    for char in s:
        if char.lower() in vowels:
            count += 1
    return count