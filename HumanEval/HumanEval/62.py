from typing import List
from pyaskit import defun_hinted, define_hinted

derivative = define_hinted(
    List[int],
    """
    {{xs}} represent coefficients of a polynomial.
    {{xs}}[0] + {{xs}}[1] * x + {{xs}}[2] * x^2 + ....
     Return derivative of this polynomial in the same form.
    """,
    training_examples=[
        {"input": {"xs": [3, 1, 2, 4, 5]}, "output": [1, 4, 12, 20]},
        {"input": {"xs": [1, 2, 3]}, "output": [2, 6]}]
    ).compile(
        test_examples=[
            {"input": {"xs": [3, 1, 2, 4, 5]}, "output": [1, 4, 12, 20]},
            {"input": {"xs": [1, 2, 3]}, "output": [2, 6]},
            {"input": {"xs": [3, 2, 1]}, "output": [2, 2]},
            {"input": {"xs": [3, 2, 1, 0, 4]}, "output": [2, 2, 0, 16]},
            {"input": {"xs": [1]}, "output": []}
        ]
    )
