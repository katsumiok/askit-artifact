from typing import List
from pyaskit import defun_hinted, define_hinted

fruit_distribution = defun_hinted(
    int,
    {'s': str, 'n': int},
    """ String represents the total number of the oranges and apples {{s}} and an integer that represent the total number of the fruits {{n}}, return the number of the mango fruits in the basket.
    For example:
    fruit_distribution("5 apples and 6 oranges", 19) ->19 - 5 - 6 = 8
    fruit_distribution("0 apples and 1 oranges",3) -> 3 - 0 - 1 = 2
    fruit_distribution("2 apples and 3 oranges", 100) -> 100 - 2 - 3 = 95
    fruit_distribution("100 apples and 1 oranges",120) -> 120 - 100 - 1 = 19
    """,
    training_examples=[
        {"input": {"s": "5 apples and 6 oranges", "n": 19}, "output": 8},
        {"input": {"s": "0 apples and 1 oranges", "n": 3}, "output": 2},
        {"input": {"s": "2 apples and 3 oranges", "n": 100}, "output": 95},
        {"input": {"s": "100 apples and 1 oranges", "n": 120}, "output": 19}],
    ).compile(
        test_examples=[
            {"input": {"s": "5 apples and 6 oranges", "n": 19}, "output": 8},
            {"input": {"s": "5 apples and 6 oranges", "n": 21}, "output": 10},
            {"input": {"s": "0 apples and 1 oranges", "n": 3}, "output": 2},
            {"input": {"s": "1 apples and 0 oranges", "n": 3}, "output": 2},
            {"input": {"s": "2 apples and 3 oranges", "n": 100}, "output": 95},
            {"input": {"s": "2 apples and 3 oranges", "n": 5}, "output": 0},
            {"input": {"s": "1 apples and 100 oranges", "n": 120}, "output": 19}]
        )
