# Recompilation count: 0
def you_are_given_a_string_f17c7a(s) -> str:
    
    new_s = ""
    letter_exists = False
    for char in s:
        if char.isalpha():
            letter_exists = True
            if char.islower():
                new_s+= char.upper()
            else:
                new_s+= char.lower()
        else:
            new_s+=char
            
    return new_s if letter_exists else new_s[::-1]