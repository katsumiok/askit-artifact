# Recompilation count: 1
def takes_a_message_message_and_a58f05(message) -> str:
    vowels = 'aeiou'
    message = message.swapcase()
    encoded_message = ''
    for c in message:
        if c.lower() in vowels:
            encoded_message += chr((ord(c) + 2))
        else:
            encoded_message += c
    return encoded_message