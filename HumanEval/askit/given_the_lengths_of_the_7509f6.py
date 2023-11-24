# Recompilation count: 0
import math

def given_the_lengths_of_the_7509f6(a: float, b: float, c: float) -> float:
    if a + b > c and a + c > b and b + c > a:
        #calculate the semi-perimeter
        s = (a + b + c) / 2
        #calculate the area
        area = math.sqrt(s*(s-a)*(s-b)*(s-c))
        return round(area, 2)
    else:
        return -1.0