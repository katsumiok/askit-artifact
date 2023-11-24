from typing import List, Tuple
from pyaskit import defun_hinted, define_hinted

bf = defun_hinted(
    Tuple[str, ...],
    {'planet1': str, 'planet2': str},
    """
    Function that takes two planet names as strings {{planet1}} and {{planet2}}. 
    The function should return a tuple containing all planets whose orbits are 
    located between the orbit of {{planet1}} and the orbit of {{planet2}}, sorted by 
    the proximity to the sun. 
    The function should return an empty tuple if {{planet1}} or {{planet2}}
    are not correct planet names. 
    """,
    training_examples=[
        {"input": {"planet1": "Jupiter", "planet2": "Neptune"}, "output": ("Saturn", "Uranus")},
        {"input": {"planet1": "Earth", "planet2": "Mercury"}, "output": ("Venus",)},
        {"input": {"planet1": "Mercury", "planet2": "Uranus"}, "output": ("Venus", "Earth", "Mars", "Jupiter", "Saturn")}]
    ).compile(
        test_examples=[
            {"input": {"planet1": "Jupiter", "planet2": "Neptune"}, "output": ("Saturn", "Uranus")},
            {"input": {"planet1": "Earth", "planet2": "Mercury"}, "output": ("Venus",)},
            {"input": {"planet1": "Mercury", "planet2": "Uranus"}, "output": ("Venus", "Earth", "Mars", "Jupiter", "Saturn")},
            {"input": {"planet1": "Neptune", "planet2": "Venus"}, "output": ("Earth", "Mars", "Jupiter", "Saturn", "Uranus")},
            {"input": {"planet1": "Earth", "planet2": "Earth"}, "output": ()},
            {"input": {"planet1": "Mars", "planet2": "Earth"}, "output": ()},
            {"input": {"planet1": "Jupiter", "planet2": "Makemake"}, "output": ()}]
    )
