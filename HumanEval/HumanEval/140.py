from typing import List
from pyaskit import defun_hinted, define_hinted

fix_spaces = define_hinted(
    str,
    """
    Given a string {{text}}, replace all spaces in it with underscores, 
    and if a string has more than 2 consecutive spaces, 
    then replace all consecutive spaces with - 
    """,
    training_examples=[
        {"input": {"text": "Example"}, "output": "Example"},
        {"input": {"text": "Example 1"}, "output": "Example_1"},
        {"input": {"text": " Example 2"}, "output": "_Example_2"},
        {"input": {"text": " Example   3"}, "output": "_Example-3"}]
    ).compile(
        test_examples=[
            {"input": {"text": "Example"}, "output": "Example"},
            {"input": {"text": "Mudasir Hanif "}, "output": "Mudasir_Hanif_"},
            {"input": {"text": "Yellow Yellow  Dirty  Fellow"}, "output": "Yellow_Yellow__Dirty__Fellow"},
            {"input": {"text": "Exa   mple"}, "output": "Exa-mple"},
            {"input": {"text": "   Exa 1 2 2 mple"}, "output": "-Exa_1_2_2_mple"}]
    )
