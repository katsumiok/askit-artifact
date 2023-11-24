from pyaskit import defun_hinted, define_hinted

triangle_area = defun_hinted(
    float,
    {'a': float, 'h': float}, 
    """Given length of a side {{a}} and high {{h}} return area for a triangle.""", 
    training_examples=[
        {"input": {"a": 5, "h": 3}, "output": 7.5}
    ]
).compile(
    test_examples=[
        {"input": {"a": 5, "h": 3}, "output": 7.5},
        {"input": {"a": 2, "h": 2}, "output": 2.0},
        {"input": {"a": 10, "h": 8}, "output": 40.0}
    ]
)