from typing import List
from pyaskit import defun_hinted, define_hinted

file_name_check = define_hinted(
    str,
    """
    Create a function which takes a string representing a {{file_name}}, and returns
    'Yes' if the the file's name is valid, and returns 'No' otherwise.
    A file's name is considered to be valid if and only if all the following conditions 
    are met:
    - There should not be more than three digits ('0'-'9') in the file's name.
    - The file's name contains exactly one dot '.'
    - The substring before the dot should not be empty, and it starts with a letter from 
    the latin alphapet ('a'-'z' and 'A'-'Z').
    - The substring after the dot should be one of these: ['txt', 'exe', 'dll']
    """,
    training_examples=[
        {"input": {"file_name": "example.txt"}, "output": 'Yes'},
        {"input": {"file_name": "1example.dll"}, "output": 'No'}]
    ).compile(
        test_examples=[
            {"input": {"file_name": "example.txt"}, "output": 'Yes'},
            {"input": {"file_name": "1example.dll"}, "output": 'No'},
            {"input": {"file_name": "s1sdf3.asd"}, "output": 'No'},
            {"input": {"file_name": "K.dll"}, "output": 'Yes'},
            {"input": {"file_name": "MY16FILE3.exe"}, "output": 'Yes'},
            {"input": {"file_name": "His12FILE94.exe"}, "output": 'No'},
            {"input": {"file_name": "_Y.txt"}, "output": 'No'},
            {"input": {"file_name": "?aREYA.exe"}, "output": 'No'},
            {"input": {"file_name": "/this_is_valid.dll"}, "output": 'No'},
            {"input": {"file_name": "this_is_valid.wow"}, "output": 'No'},
            {"input": {"file_name": "this_is_valid.txt"}, "output": 'Yes'},
            {"input": {"file_name": "this_is_valid.txtexe"}, "output": 'No'},
            {"input": {"file_name": "#this2_i4s_5valid.ten"}, "output": 'No'},
            {"input": {"file_name": "@this1_is6_valid.exe"}, "output": 'No'},
            {"input": {"file_name": "this_is_12valid.6exe4.txt"}, "output": 'No'},
            {"input": {"file_name": "all.exe.txt"}, "output": 'No'},
            {"input": {"file_name": "I563_No.exe"}, "output": 'Yes'},
            {"input": {"file_name": "Is3youfault.txt"}, "output": 'Yes'},
            {"input": {"file_name": "no_one#knows.dll"}, "output": 'Yes'},
            {"input": {"file_name": "1I563_Yes3.exe"}, "output": 'No'},
            {"input": {"file_name": "I563_Yes3.txtt"}, "output": 'No'},
            {"input": {"file_name": "final..txt"}, "output": 'No'},
            {"input": {"file_name": "final132"}, "output": 'No'},
            {"input": {"file_name": "_f4indsartal132."}, "output": 'No'},
            {"input": {"file_name": ".txt"}, "output": 'No'},
            {"input": {"file_name": "s."}, "output": 'No'}]
)
