from typing import List
from pyaskit import defun_hinted, define_hinted

flip_case = defun_hinted(
    str,
    {'string': str},
    """ For a given string {{string}}, flip lowercase characters to uppercase and uppercase to lowercase.""",
    training_examples=[
        {"input": {"string": 'Hello'}, "output": 'hELLO'}]
    ).compile(
        test_examples=[
            {"input": {"string": ''}, "output": ''},
            {"input": {"string": 'Hello!'}, "output": 'hELLO!'},
            {"input": {"string": 'These violent delights have violent ends'}, "output": 'tHESE VIOLENT DELIGHTS HAVE VIOLENT ENDS'},
        ]
    )
