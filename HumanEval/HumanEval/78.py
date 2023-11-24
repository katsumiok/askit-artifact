from typing import List
from pyaskit import defun_hinted, define_hinted

hex_key = define_hinted(
    int,
    """Receives a hexadecimal number {{num}} as a string and counts the number of hexadecimal digits that are primes"
    """,
    training_examples=[
        {"input": {"num": "AB"}, "output": 1},
        {"input": {"num": "1077E"}, "output": 2},
        {"input": {"num": "ABED1A33"}, "output": 4},
        {"input": {"num": "123456789ABCDEF0"}, "output": 6},
        {"input": {"num": "2020"}, "output": 2}]
    ).compile(
        test_examples=[
            {"input": {"num": "AB"}, "output": 1},
            {"input": {"num": "1077E"}, "output": 2},
            {"input": {"num": "ABED1A33"}, "output": 4},
            {"input": {"num": "123456789ABCDEF0"}, "output": 6},
            {"input": {"num": "2020"}, "output": 2},
            {"input": {"num": "112233445566778899AABBCCDDEEFF00"}, "output": 12},
            {"input": {"num": "[]" }, "output": 0}]
    )
