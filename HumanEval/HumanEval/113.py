from typing import List
from pyaskit import defun_hinted, define_hinted

odd_count = define_hinted(
    List[str],
    """
    Given a list of strings {{lst}}, where each string consists of only digits, return a list.
    Each element i of the output should be \"the number of odd elements in the
    string i of the input.\" where all the i's should be replaced by the number
    of odd digits in the i'th string of the input.
    """,
    training_examples=[
        {"input": {"lst": ['1234567']}, "output": ["the number of odd elements 4n the str4ng 4 of the 4nput."]},
        {"input": {"lst": ['3', '11111111']}, "output": ["the number of odd elements 1n the str1ng 1 of the 1nput.", "the number of odd elements 8n the str8ng 8 of the 8nput."]}
    ]
).compile(
    test_examples=[
        {"input": {"lst": ['1234567']}, "output": ["the number of odd elements 4n the str4ng 4 of the 4nput."]},
        {"input": {"lst": ['3',"11111111"]}, "output": ["the number of odd elements 1n the str1ng 1 of the 1nput.", "the number of odd elements 8n the str8ng 8 of the 8nput."]},
        {"input": {"lst": ['271', '137', '314']}, "output": ['the number of odd elements 2n the str2ng 2 of the 2nput.','the number of odd elements 3n the str3ng 3 of the 3nput.','the number of odd elements 2n the str2ng 2 of the 2nput.']}
    ]
)

