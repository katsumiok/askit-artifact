# Recompilation count: 0
def given_a_string_string_find_064def(string: str) -> int:
    #  Given a string 'string', find out how many distinct characters (regardless of case) does it consist of
    return len(set(string.lower()))