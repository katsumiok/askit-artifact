from typing import List
from pyaskit import defun_hinted

parse_music = defun_hinted(
    List[int],
    {'music_string': str},
    """ Input to this function is a string {{music_string}} representing musical notes in a special ASCII format.
    Your task is to parse this string and return list of integers corresponding to how many beats does each
    not last.

    Here is a legend:
    'o' - whole note, lasts four beats
    'o|' - half note, lasts two beats
    '.|' - quater note, lasts one beat
    """,
    training_examples=[
        {"input": {"music_string": 'o o| .| o| o| .| .| .| .| o o'}, "output": [4, 2, 1, 2, 2, 1, 1, 1, 1, 4, 4]}]
    ).compile(
        test_examples=[
            {"input": {"music_string": ''}, "output": []},
            {"input": {"music_string": 'o o o o'}, "output": [4, 4, 4, 4]},
            {"input": {"music_string": '.| .| .| .|'}, "output": [1, 1, 1, 1]},
            {"input": {"music_string": 'o| o| .| .| o o o o'}, "output": [2, 2, 1, 1, 4, 4, 4, 4]},
            {"input": {"music_string": 'o| .| o| .| o o| o o|'}, "output": [2, 1, 2, 1, 4, 2, 4, 2]},
        ]
    )
