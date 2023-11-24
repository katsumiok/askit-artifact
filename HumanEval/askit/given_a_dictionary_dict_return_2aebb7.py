# Recompilation count: 0
def given_a_dictionary_dict_return_2aebb7(dict: dict) -> bool:
    # If the dict is empty, return False
    if not dict:
        return False
    # Check if all keys are lower case or upper case strings
    lower, upper = True, True
    for key in dict.keys():
        if not isinstance(key, str):
            return False
        if not key.islower():
            lower = False
        if not key.isupper():
            upper = False
    # Return True if all keys are lower case or upper case strings
    return lower or upper