# Recompilation count: 3
def check_if_s_is_a_99e95b(s) -> bool:
    # Check if 's' is a valid password.
    # A valid password should have:
    # - At least 8 characters
    # - At least one uppercase letter
    # - At least one lowercase letter
    # - At least one digit
    if len(s) < 8:
        return False
    if not any(char.isupper() for char in s):
        return False
    if not any(char.islower() for char in s):
        return False
    if not any(char.isdigit() for char in s):
        return False
    return True