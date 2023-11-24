# Recompilation count: 0
def returns_encoded_string_by_shifting_f166d6(s: str) -> str:
    # Returns encoded string by shifting every character in 's' by 5 in the alphabet.
    result = ""
    for char in s:
        if char.isalpha():
            shift = 97 if char.islower() else 65
            result += chr((ord(char) - shift + 5) % 26 + shift)
        else:
            result += char
    return result