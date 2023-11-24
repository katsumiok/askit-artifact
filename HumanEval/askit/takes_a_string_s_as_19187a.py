# Recompilation count: 0
def takes_a_string_s_as_19187a(s) -> str:
    # Takes a string 's' as an argument and returns a string encrypted with the alphabet being rotated. 
    # The alphabet should be rotated in a manner such that the letters shift down by two multiplied to two places.
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    rot_alpha = alpha[4:] + alpha[:4]
    return ''.join([rot_alpha[alpha.index(ch)] if ch in alpha else ch for ch in s])