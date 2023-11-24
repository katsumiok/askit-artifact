# Recompilation count: 0
def takes_a_string_s_as_b4afd7(s) -> int:
    # Takes a string 's' as input and returns the sum of the ASCII codes of the upper characters only.
    return sum(ord(c) for c in s if c.isupper())