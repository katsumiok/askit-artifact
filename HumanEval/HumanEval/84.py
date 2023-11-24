from typing import List
from pyaskit import defun_hinted, define_hinted

solve = define_hinted(
    str,
    """
    Given a positive integer {{N}}, return the total sum of its digits in binary.
    Constraints:
         0 ≤ {{N}} ≤ 10000.
    Output:
         a string of binary number
    """,
    training_examples=[
        {"input": {"N": 1000}, "output": "1"},
        {"input": {"N": 150}, "output": "110"},
        {"input": {"N": 147}, "output": "1100"}]
    ).compile(
        test_examples=[
            {"input": {"N": 1000}, "output": "1"},
            {"input": {"N": 150}, "output": "110"},
            {"input": {"N": 147}, "output": "1100"},
            {"input": {"N": 333}, "output": "1001"},
            {"input": {"N": 963}, "output": "10010"}]
    )
