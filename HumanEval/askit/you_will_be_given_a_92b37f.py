# Recompilation count: 0
def you_will_be_given_a_92b37f(decimal) -> str:
    # convert 'decimal' to binary and add 'db' at the beginning and at the end
    return 'db' + bin(decimal)[2:] + 'db'