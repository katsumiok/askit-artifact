# Recompilation count: 0
def given_a_string_s_count_655a2b(s: str) -> int:
    #  Given a string 's', count the number of uppercase vowels in even indices. 
    vowels = 'AEIOU'
    count = 0
    for i in range(0, len(s), 2):
        if s[i] in vowels:
            count += 1
    return count