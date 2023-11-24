from pyaskit import defun_hinted, define_hinted

multiply = defun_hinted(
    int,
    {'a': int, 'b': int},
    """Complete the function that takes two integers {{a}} and {{b}} and returns 
    the product of their unit digits.
    Assume the input is always valid.
    """,
    training_examples=[
        {"input": {"a": 148, "b": 412}, "output": 16},
        {"input": {"a": 19, "b": 28}, "output": 72},
        {"input": {"a": 2020, "b": 1851}, "output": 0},
        {"input": {"a": 14, "b": -15}, "output": 20}
    ]
).compile(
    test_examples=[
        {"input": {"a": 148, "b": 412}, "output": 16},
        {"input": {"a": 19, "b": 28}, "output": 72},
        {"input": {"a": 2020, "b": 1851}, "output": 0},
        {"input": {"a": 14, "b": -15}, "output": 20},
        {"input": {"a": 76, "b": 67}, "output": 42},
        {"input": {"a": 17, "b": 27}, "output": 49},
        {"input": {"a": 0, "b": 1}, "output": 0},
        {"input": {"a": 0, "b": 0}, "output": 0}
    ]
)
