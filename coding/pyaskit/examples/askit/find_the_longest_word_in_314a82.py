# Recompilation count: 0
def find_the_longest_word_in_314a82(s) -> str:
    # Find the longest word in 's'.
    words = s.split()
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word