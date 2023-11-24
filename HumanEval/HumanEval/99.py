from typing import List
from pyaskit import define_hinted

closest_integer = define_hinted(
    int,
    """
    Takes a value (string) {{value}} representing a number and returns the closest integer to it. If the number is equidistant from two integers, round it away from zero.
    """,
    training_examples=[
        {"input": {"value": '10'}, "output": 10},
        {"input": {"value": '15.3'}, "output": 15}
    ]
).compile(
    test_examples=[
        {"input": {"value": '10'}, "output": 10},
        {"input": {"value": '14.5'}, "output": 15},
        {"input": {"value": '-15.5'}, "output": -16},
        {"input": {"value": '15.3'}, "output": 15},
        {"input": {"value": '0'}, "output": 0}
    ]
)
