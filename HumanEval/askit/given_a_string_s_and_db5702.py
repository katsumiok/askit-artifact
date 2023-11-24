# Recompilation count: 0
from typing import List

def given_a_string_s_and_db5702(s: str, n: int) -> List[str]:
    vowels = "aeiouAEIOU"
    words = s.split()
    result = []
    
    for word in words:
        count = 0
        for ch in word:
            if ch not in vowels:
                count += 1
        if count == n:
            result.append(word)
    return result