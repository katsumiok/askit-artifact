from typing import List
from pyaskit import defun_hinted, define_hinted

sum_squares = define_hinted(
    int,
    """
    Takes a list of integers ({{lst}}). For all entries in the list, the function shall square the integer entry if its index is a 
    multiple of 3 and will cube the integer entry if its index is a multiple of 4 and not a multiple of 3. The function will not 
    change the entries in the list whose indexes are not a multiple of 3 or 4. The function shall then return the sum of all entries. 
    """,
    training_examples=[
        {"input": {"lst": [1,2,3]}, "output": 6},
        {"input": {"lst": []}, "output": 0},
        {"input": {"lst": [-1,-5,2,-1,-5]}, "output": -126}
        ]
    ).compile(
        test_examples=[
            {"input": {"lst": [1,2,3]}, "output": 6},
            {"input": {"lst": [1,4,9]}, "output": 14},
            {"input": {"lst": []}, "output": 0},
            {"input": {"lst": [1,1,1,1,1,1,1,1,1]}, "output": 9},
            {"input": {"lst": [-1,-1,-1,-1,-1,-1,-1,-1,-1]}, "output": -3},
            {"input": {"lst": [0]}, "output": 0},
            {"input": {"lst": [-1,-5,2,-1,-5]}, "output": -126},
            {"input": {"lst": [-56,-99,1,0,-2]}, "output": 3030},
            {"input": {"lst": [-1,0,0,0,0,0,0,0,-1]}, "output": 0},
            {"input": {"lst": [-16, -9, -2, 36, 36, 26, -20, 25, -40, 20, -4, 12, -26, 35, 37]}, "output": -14196},
            {"input": {"lst": [-1, -3, 17, -1, -15, 13, -1, 14, -14, -12, -5, 14, -14, 6, 13, 11, 16, 16, 4, 10]}, "output": -1448}
        ]
    )
