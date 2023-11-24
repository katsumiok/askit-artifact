# Recompilation count: 0
def you_are_given_a_string_8691a0(sentence: str) -> str:
    # helper function to check if a number is prime
    def is_prime(n):
        if n < 2: return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    # split the sentence into words
    words = sentence.split(' ')
    
    # filter words whose length is a prime number
    prime_words = [word for word in words if is_prime(len(word))]
    
    # return the prime words as a sentence
    return ' '.join(prime_words)