# Recompilation count: 0
import re

def check_if_s_is_a_6c3f5a(s) -> bool:
    # Check if 's' is a valid URL.
    regex = r"^(http|https)://[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*(:[0-9]+)?(/.*)?$"
    return bool(re.match(regex, s))