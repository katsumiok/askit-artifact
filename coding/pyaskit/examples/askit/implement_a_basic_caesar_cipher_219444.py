# Recompilation count: 0
def implement_a_basic_caesar_cipher_219444(s, shift) -> str:
    encrypted = ""
    for char in s:
        if char.isalpha():
            ascii_value = ord(char)
            shifted_value = ascii_value + shift
            if char.isupper():
                if shifted_value > ord('Z'):
                    shifted_value = ord('A') - 1 + (shifted_value - ord('Z'))
                elif shifted_value < ord('A'):
                    shifted_value = ord('Z') + 1 - (ord('A') - shifted_value)
            else:
                if shifted_value > ord('z'):
                    shifted_value = ord('a') - 1 + (shifted_value - ord('z'))
                elif shifted_value < ord('a'):
                    shifted_value = ord('z') + 1 - (ord('a') - shifted_value)
            encrypted += chr(shifted_value)
        else:
            encrypted += char
    return encrypted