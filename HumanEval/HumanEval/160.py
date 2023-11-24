from typing import List
from pyaskit import defun_hinted, define_hinted

do_algebra = defun_hinted(
    int,
    {'operator':List[str], 'operand':List[int]},
    """
    Given two lists {{operator}}, and {{operand}}. The first list has basic algebra operations, and 
    the second list is a list of integers. Use the two given lists to build the algebric 
    expression and return the evaluation of this expression.

    The basic algebra operations:
    Addition ( + ) 
    Subtraction ( - ) 
    Multiplication ( * ) 
    Floor division ( // ) 
    Exponentiation ( ** ) 

    Note:
        The length of operator list is equal to the length of operand list minus one.
        Operand is a list of of non-negative integers.
        Operator list has at least one operator, and operand list has at least two operands.

    """,
    training_examples=[
        {"input": {"operator": ['+', '*', '-'], "operand": [2, 3, 4, 5]}, "output": 9}
    ]
).compile(
        test_examples=[
            {"input": {"operator": ['**', '*', '+'], "operand": [2, 3, 4, 5]}, "output": 37},
            {"input": {"operator": ['+', '*', '-'], "operand": [2, 3, 4, 5]}, "output": 9},
            {"input": {"operator": ['//', '*'], "operand": [7, 3, 4]}, "output": 8}
        ]
    )
