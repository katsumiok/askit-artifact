# Recompilation count: 0
def input_are_two_strings_a_ed77ba(a: str, b: str) -> str:
    # Input are two strings 'a' and 'b' consisting only of 1s and 0s.
    # Perform binary XOR on these inputs and return result also as a string.
    
    # convert strings to integers 
    int_a, int_b = int(a, 2), int(b, 2)

    # find the binary rep. of their XOR
    xor_ab = bin(int_a ^ int_b)[2:]

    # pad with leading zeros if needed
    pad_len = max(len(a), len(b)) - len(xor_ab)
    xor_ab = '0'*pad_len + xor_ab
    
    return xor_ab