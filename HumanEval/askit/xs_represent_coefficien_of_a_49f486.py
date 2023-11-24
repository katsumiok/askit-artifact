# Recompilation count: 0
from typing import List

def xs_represent_coefficien_of_a_49f486(xs: List[int]) -> List[int]:
    # 'xs' represent coefficients of a polynomial.
    # 'xs'[0] + 'xs'[1] * x + 'xs'[2] * x^2 + ....
    # Return derivative of this polynomial in the same form.
    
    return [i*xs[i] for i in range(1,len(xs))]