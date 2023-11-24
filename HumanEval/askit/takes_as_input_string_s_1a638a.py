# Recompilation count: 0
def takes_as_input_string_s_1a638a(s: str) -> str:
    # takes as input string 's' encoded with a simple rotation cipher. Returns a decoded string.
    decoded_string = ''
    for char in s:
        if char.isalpha():
            shift = 3 if char.islower() else -3
            decoded_string += chr((ord(char) - shift - 97) % 26 + 97)
        else:
            decoded_string += char
    return decoded_string