from typing import List
from pyaskit import defun_hinted, define_hinted

anti_shuffle = define_hinted(
    str,
    """
    Takes a string {{s}} and returns an ordered version of it.
    Ordered version of string, is a string where all words (separated by space)
    are replaced by a new word where all the characters arranged in
    ascending order based on ascii value.
    Note: You should keep the order of words and blank spaces in the sentence.
    """,
    training_examples=[
        {"input": {"s": 'Hi'}, "output": 'Hi'},
        {"input": {"s": 'hello'}, "output": 'ehllo'},
        {"input": {"s": 'Hello World!!!'}, "output": 'Hello !!!Wdlor'}]
    ).compile(
        test_examples=[
            {"input": {"s": 'Hi'}, "output": 'Hi'},
            {"input": {"s": 'hello'}, "output": 'ehllo'},
            {"input": {"s": 'number'}, "output": 'bemnru'},
            {"input": {"s": 'abcd'}, "output": 'abcd'},
            {"input": {"s": 'Hello World!!!'}, "output": 'Hello !!!Wdlor'},
            {"input": {"s": ''}, "output": ''},
            {"input": {"s": 'Hi. My name is Mister Robot. How are you?'}, "output": '.Hi My aemn is Meirst .Rboot How aer ?ouy'}]
    )
