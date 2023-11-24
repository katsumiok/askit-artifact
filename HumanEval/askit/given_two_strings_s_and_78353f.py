# Recompilation count: 0
from typing import Tuple

def given_two_strings_s_and_78353f(s: str, c: str) -> Tuple[str, bool]:
    result = ''.join([ch for ch in s if ch not in c])
    return (result, result == result[::-1])