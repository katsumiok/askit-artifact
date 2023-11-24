# Recompilation count: 0
def check_if_two_words_s0_8d6a5b(s0: str, s1: str) -> bool:
    # Check if two words 's0' and 's1' have the same characters.
    
    # Convert both strings to sets, this will remove duplicates
    # and order doesn't matter in sets. If two sets are 
    # equal then they contain the same elements.
    return set(s0) == set(s1)