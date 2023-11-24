from typing import List
from pyaskit import defun_hinted, define_hinted

car_race_collision = defun_hinted(
    int,
    {'n': int},
    """ Imagine a road that's a perfectly straight infinitely long line.
    {{n}} cars are driving left to right;  simultaneously, a different set of {{n}} cars
    are driving right to left.   The two sets of cars start out being very far from
    each other.  All cars move in the same speed.  Two cars are said to collide
    when a car that's moving left to right hits a car that's moving right to left.
    However, the cars are infinitely sturdy and strong; as a result, they continue moving
    in their trajectory as if they did not collide.

    This function outputs the number of such collisions.
    """,
    training_examples=[]
    ).compile(
        test_examples=[
            {"input": {"n": 2}, "output": 4},
            {"input": {"n": 3}, "output": 9},
            {"input": {"n": 4}, "output": 16},
            {"input": {"n": 8}, "output": 64},
            {"input": {"n": 10}, "output": 100}
        ]
    )
