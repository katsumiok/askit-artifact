# Recompilation count: 0
def you_are_given_a_word_542717(word: str) -> str:
    vowels = "AEIOUaeiou"

    for i in range(len(word)-2, 0, -1):
        if (word[i] in vowels) and (word[i-1] not in vowels) and (word[i+1] not in vowels):
            return word[i]

    return ""