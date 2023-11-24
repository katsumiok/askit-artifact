# Recompilation count: 0
def return_a_string_containing_space_ffca1c(n: int) -> str:
    #  Return a string containing space-delimited numbers starting from 0 upto 'n' inclusive.
    return " ".join(str(i) for i in range(n+1))