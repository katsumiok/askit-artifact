# Recompilation count: 0
from typing import Union, List

def given_a_string_of_words_b98191(txt: str) -> Union[List[str], int]:
    if " " in txt:
        return txt.split(" ")
    elif "," in txt:
        return txt.split(",")
    else:
        counter = 0
        for ch in txt:
            if ch.islower() and (ord(ch) - ord('a')) % 2 != 0:
                counter += 1
        return counter