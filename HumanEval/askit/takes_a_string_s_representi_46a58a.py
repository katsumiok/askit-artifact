# Recompilation count: 0
def takes_a_string_s_representi_46a58a(s) -> int:
    s = s.lower()
    vowels = ['a', 'e', 'i', 'o', 'u']
    count = 0
    for i in s:
        if i in vowels:
            count += 1
    if s[-1] == 'y':
        count += 1
    return count