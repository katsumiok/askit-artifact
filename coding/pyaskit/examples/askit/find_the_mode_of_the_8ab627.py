# Recompilation count: 0
from collections import Counter

def find_the_mode_of_the_8ab627(ns) -> int:
    # Find the mode of the array 'ns'
    # Count the occurrences of each element in 'ns'
    freq = Counter(ns)
    
    # Find the elements with the maximum frequency
    max_freq = max(freq.values())
    mode = [x for x, f in freq.items() if f == max_freq]
    
    # if there is only one mode, return it
    if len(mode) == 1:
        return mode[0]
    
    # if there are multiple modes, return the smallest one
    return min(mode)