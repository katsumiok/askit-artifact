# Recompilation count: 0
import numpy as np

def xs_are_coefficien_of_a_230bac(xs: List[float]) -> float:
    # 'xs' are coefficients of a polynomial
    # find_zero find x such that poly(x) = 0
    roots = np.roots(xs)
    # return the first real root
    for root in roots:
        if np.isreal(root):
            return root.real
    return None