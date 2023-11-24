from typing import List
from pyaskit import defun_hinted, define_hinted
import math
def poly(xs: list, x: float):
    """
    Evaluates polynomial with coefficients xs at point x.
    return xs[0] + xs[1] * x + xs[1] * x^2 + .... xs[n] * x^n
    """
    return sum([coeff * math.pow(x, i) for i, coeff in enumerate(xs)])


find_zero = defun_hinted(
    float,
    {'xs': List[float]},
    """ {{xs}} are coefficients of a polynomial.
    find_zero find x such that poly(x) = 0.
    find_zero returns only only zero point, even if there are many.
    Moreover, find_zero only takes list {{xs}} having even number of coefficients
    and largest non zero coefficient as it guarantees
    a solution.
    """,
    training_examples=[
        {"input": {"xs": [1, 2]}, "output": -0.5},
        {"input": {"xs": [-6, 11, -6, 1]}, "output": 1}]
    ).compile()

def check(candidate):
    import math
    import random
    rng = random.Random(42)
    import copy
    for _ in range(100):
        ncoeff = 2 * rng.randint(1, 4)
        coeffs = []
        for _ in range(ncoeff):
            coeff = rng.randint(-10, 10)
            if coeff == 0:
                coeff = 1
            coeffs.append(coeff)
        solution = candidate(copy.deepcopy(coeffs))
        assert math.fabs(poly(coeffs, solution)) < 1e-4
