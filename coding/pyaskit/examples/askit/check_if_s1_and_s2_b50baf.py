# Recompilation count: 0

def check_if_s1_and_s2_b50baf(s1, s2) -> bool:
    # Check if 's1' and 's2' are anagrams.
    
    # Convert both strings to lowercase, remove spaces and punctuation.
    s1 = ''.join(c.lower() for c in s1 if c.isalpha())
    s2 = ''.join(c.lower() for c in s2 if c.isalpha())
    
    # Check if the sorted characters of both strings are the same.
    return sorted(s1) == sorted(s2)