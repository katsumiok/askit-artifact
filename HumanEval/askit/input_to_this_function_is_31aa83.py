# Recompilation count: 0
from typing import List

def input_to_this_function_is_31aa83(music_string: str) -> List[int]:
    #  Input to this function is a string 'music_string' representing musical notes in a special ASCII format.
    #  Your task is to parse this string and return list of integers corresponding to how many beats does each
    #  not last.

    #  Here is a legend:
    #  'o' - whole note, lasts four beats
    #  'o|' - half note, lasts two beats
    #  '.|' - quater note, lasts one beat

    music_string = music_string.split(' ')
    result = []

    for note in music_string:
        if note == 'o':
            result.append(4)
        elif note == 'o|':
            result.append(2)
        elif note == '.|':
            result.append(1)
            
    return result