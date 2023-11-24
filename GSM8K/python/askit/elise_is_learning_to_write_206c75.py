# Recompilation count: 0
def elise_is_learning_to_write_206c75() -> int:
    # 26 letters in English alphabet: written twice in full = 2 * 26 letters
    full_alphabet = 2 * 26
    # Half of the alphabet = 26/2 = 13 letters
    half_alphabet = 26//2 
    total_letters_written = full_alphabet + half_alphabet
    # Finally she re-writes everything written = 2 * total letters written 
    total_letters_written = 2 * total_letters_written
    return total_letters_written