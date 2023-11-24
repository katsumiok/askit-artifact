# Recompilation count: 0
def find_how_many_times_a_e24916(substring: str, string: str) -> int:
    count = start = 0
    while start < len(string):
        pos = string.find(substring, start)
        if pos != -1:
            start = pos + 1
            count += 1
        else:
            break
    return count