# Recompilation count: 0
from typing import Union

def you_are_given_two_positive_ec41e7(n: int, m: int) -> Union[str, int]:
    if n > m:
        return -1
    else:
        # compute the average
        average = round((n + m) / 2)

        # convert to binary
        binary = bin(average)

        return binary