# Recompilation count: 0
def you_are_given_2_words_583203(a: str, b: str) -> bool:
    for i in range(len(b)):
        if b[i:] + b[:i] in a:
            return True
    return False