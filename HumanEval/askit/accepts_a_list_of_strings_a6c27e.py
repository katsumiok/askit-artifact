# Recompilation count: 0
def accepts_a_list_of_strings_a6c27e(words) -> str:
    max_unique = -1
    lex_min = ''
    
    for word in words:
        unique_chars = len(set(word))
        if unique_chars > max_unique:
            max_unique = unique_chars
            lex_min = word
        elif unique_chars == max_unique:
            if word < lex_min:
                lex_min = word
                
    return lex_min