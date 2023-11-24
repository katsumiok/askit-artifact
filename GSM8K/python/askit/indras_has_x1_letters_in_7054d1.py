# Recompilation count: 0
def indras_has_x1_letters_in_7054d1(x1, x2) -> int:
    # Indras has'x1'letters in her name. Her sister's name has'x2'more letters than half of the letters in Indras' name. How many letters are in Indras and her sister's names?
    sisters_name_length = (x1 / 2) + x2
    total_length = x1 + sisters_name_length
    return int(total_length)