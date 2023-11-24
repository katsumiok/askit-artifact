from typing import List
from pyaskit import defun_hinted, define_hinted

get_closest_vowel = define_hinted(
    str,
    """You are given a {{word}}. Your task is to find the closest vowel that stands between 
    two consonants from the right side of the word (case sensitive).
    
    Vowels in the beginning and ending doesn't count. Return empty string if you didn't
    find any vowel met the above condition. 

    You may assume that the given string contains English letter only."
    """,
    training_examples=[
        {"input": {"word": "yogurt"}, "output": "u"},
        {"input": {"word": "FULL"}, "output": "U"},
        {"input": {"word": "quick"}, "output": ""},
        {"input": {"word": "ab"}, "output": ""}]
    ).compile(
        test_examples=[
            {"input": {"word": "yogurt"}, "output": "u"},
            {"input": {"word": "full"}, "output": "u"},
            {"input": {"word": "easy"}, "output": ""},
            {"input": {"word": "eAsy"}, "output": ""},
            {"input": {"word": "ali"}, "output": ""},
            {"input": {"word": "bad"}, "output": "a"},
            {"input": {"word": "most"}, "output": "o"},
            {"input": {"word": "ab"}, "output": ""},
            {"input": {"word": "ba"}, "output": ""},
            {"input": {"word": "quick"}, "output": ""},
            {"input": {"word": "anime"}, "output": "i"},
            {"input": {"word": "Asia"}, "output": ""},
            {"input": {"word": "Above"}, "output": "o"},]
    )
