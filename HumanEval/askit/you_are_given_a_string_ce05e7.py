# Recompilation count: 0
def you_are_given_a_string_ce05e7(s) -> bool:
    # Check if the string length is less than 3
    if len(s) < 3:
        return False
    
    # Check each triad of letters for distinctness
    for i in range(len(s) - 2):
        if s[i] == s[i + 1] or s[i] == s[i + 2] or s[i + 1] == s[i + 2]:
            return False
            
    return True