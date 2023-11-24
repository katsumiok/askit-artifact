from typing import List
from pyaskit import define_hinted

special_factorial = define_hinted(
    int,
    """
    The Brazilian factorial is defined as:
    brazilian_factorial({{n}}) = n! * (n-1)! * (n-2)! * ... * 1!
    where n > 0
    """,
    training_examples=[
        {"input": {"n": 4}, "output": 288}
    ]
).compile(
    test_examples=[
        {"input": {"n": 4}, "output": 288},
        {"input": {"n": 5}, "output": 34560},
        {"input": {"n": 7}, "output": 125411328000},
        {"input": {"n": 1}, "output": 1}
    ]
)

