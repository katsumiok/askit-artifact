# Recompilation count: 0
def takes_as_input_string_s_804259(s: str, k: int) -> str:
    """
    Takes as input string 's' encoded with encode_shift function. 
    Returns decoded string.
    """

    decoded_string = ''

    for char in s:
        if char.isalpha():
            # Shift character by 'k' places to the left
            shift = ord(char.lower()) - k
            
            # If the shift goes past 'a', loop back to 'z'
            if shift < ord('a'):
                shift += 26

            # If original character was capitalized, capitalize decoded character
            if char.isupper():
                decoded_string += chr(shift).upper()
            else:
                decoded_string += chr(shift)
        else:
            # For non-alphabet characters, don't change them
            decoded_string += char

    return decoded_string