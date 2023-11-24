from typing import List
from pyaskit import defun_hinted, define_hinted

has_close_elements = defun_hinted(
    bool,
    {'numbers': List[float], 'threshold': float},
    """ Check if in {{numbers}} list of numbers, are any two numbers closer to each other than
    given {{threshold}}.
    """,
    training_examples=[
        {"input": {"numbers": [1.0, 2.0, 3.0], "threshold": 0.5}, "output": False},
        {"input": {"numbers": [1.0, 2.8, 3.0, 4.0, 5.0, 2.0], "threshold": 0.3}, "output": True}]
    ).compile(
        test_examples=[
            {"input": {"numbers": [1.0, 2.0, 3.9, 4.0, 5.0, 2.2], "threshold": 0.3}, "output": True},
            {"input": {"numbers": [1.0, 2.0, 3.9, 4.0, 5.0, 2.2], "threshold": 0.05}, "output": False},
            {"input": {"numbers": [1.0, 2.0, 5.9, 4.0, 5.0], "threshold": 0.95}, "output": True},
            {"input": {"numbers": [1.0, 2.0, 5.9, 4.0, 5.0], "threshold": 0.8}, "output": False},
            {"input": {"numbers": [1.0, 2.0, 3.0, 4.0, 5.0, 2.0], "threshold": 0.1}, "output": True},
            {"input": {"numbers": [1.1, 2.2, 3.1, 4.1, 5.1], "threshold": 1.0}, "output": True},
            {"input": {"numbers": [1.1, 2.2, 3.1, 4.1, 5.1], "threshold": 0.5}, "output": False}
        ]
    )
