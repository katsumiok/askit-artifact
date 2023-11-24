# Recompilation count: 0
def check_if_s_is_a_6c27f4(s) -> bool:
    # Check if 's' is a valid email address.
    import re
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if re.match(pattern, s):
        return True
    else:
        return False