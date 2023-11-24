# Recompilation count: 2
def takes_string_s_of_words_58fb23(S) -> int:
    boredoms_count = 0
    sentences = S.replace('!', '.').replace('?', '.').split('.')
    for sentence in sentences:
        words = sentence.split()
        if len(words) > 0 and words[0] == 'I':
            boredoms_count += 1
    return boredoms_count