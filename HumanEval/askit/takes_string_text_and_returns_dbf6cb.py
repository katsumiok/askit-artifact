# Recompilation count: 0
def takes_string_text_and_returns_dbf6cb(text) -> str:
    # Takes string 'text' and returns string without vowels.
    
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    result = [char for char in text if char not in vowels]

    return "".join(result)