from typing import List
from pyaskit import defun_hinted, define_hinted

encode = define_hinted(
    str,
    """
    Takes a message {{message}}, and encodes it in such a 
    way that it swaps case of all letters, replaces all vowels in 
    the message with the letter that appears 2 places ahead of that 
    vowel in the English alphabet. 
    Assume only letters. 
    """,
    training_examples=[
        {"input": {"message": 'test'}, "output": 'TGST'},
        {"input": {"message": 'This is a message'}, "output": 'tHKS KS C MGSSCGG'}]
    ).compile(
        test_examples=[
            {"input": {"message": 'TEST'}, "output": 'tgst'},
            {"input": {"message": 'Mudasir'}, "output": 'mWDCSKR'},
            {"input": {"message": 'YES'}, "output": 'ygs'},
            {"input": {"message": 'This is a message'}, "output": 'tHKS KS C MGSSCGG'},
            {"input": {"message": "I DoNt KnOw WhAt tO WrItE"}, "output": 'k dQnT kNqW wHcT Tq wRkTg'},
        ]
    )
