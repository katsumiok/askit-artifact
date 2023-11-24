# Recompilation count: 0
def takes_a_string_s_and_599c03(s) -> str:
    # Split the string into list of words
    words_list = s.split(' ')
    # Initialize an empty list to store ordered words
    ordered_words_list = []
    
    # Iterate over each word in the list
    for word in words_list:
        # Sort the characters in the word and form a new word
        sorted_word = ''.join(sorted(word))
        # Append the new word to the list
        ordered_words_list.append(sorted_word)
        
    # Join the list of ordered words into a string separated by spaces
    ordered_string = ' '.join(ordered_words_list)
    
    return ordered_string