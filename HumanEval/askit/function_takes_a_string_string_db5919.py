# Recompilation count: 0
def function_takes_a_string_string_db5919(string) -> bool:
    length = len(string)
    if length > 1:
        for i in range(2, length):
            if (length % i) == 0:
                return False
        else:
            return True
    else:
        return False