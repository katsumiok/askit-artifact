from typing import List
from pyaskit import defun_hinted, define_hinted

sort_numbers = defun_hinted(
    str,
    {'numbers': str},
    """ Input is a space-delimited string {{numbers}} from 'zero' to 'nine'.
    Valid choices are 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' and 'nine'.
    Return the string with numbers sorted from smallest to largest
    """,
    training_examples=[
        {"input": {"numbers": 'three one five'}, "output": 'one three five'}]
    ).compile(
        test_examples=[
            {"input": {"numbers": ''}, "output": ''},
            {"input": {"numbers": 'three'}, "output": 'three'},
            {"input": {"numbers": 'three five nine'}, "output": 'three five nine'},
            {"input": {"numbers": 'five zero four seven nine eight'}, "output": 'zero four five seven eight nine'},
            {"input": {"numbers": 'six five four three two one zero'}, "output": 'zero one two three four five six'}]
    )
