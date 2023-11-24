from typing import List
from pyaskit import defun_hinted, define_hinted

Strongest_Extension = defun_hinted(
    str,
    {'class_name': str, 'extensions': List[str]},
    """You will be given the name of a class {{class_name}} and a list of {{extensions}}.
    The extensions are to be used to load additional classes to the class. The
    strength of the extension is as follows: Let CAP be the number of the uppercase
    letters in the extension's name, and let SM be the number of lowercase letters 
    in the extension's name, the strength is given by the fraction CAP - SM. 
    You should find the strongest extension and return a string in this 
    format: ClassName.StrongestExtensionName.
    If there are two or more extensions with the same strength, you should
    choose the one that comes first in the list.
    For example, if you are given 'Slices' as the class and a list of the
    extensions: ['SErviNGSliCes', 'Cheese', 'StuFfed'] then you should
    return 'Slices.SErviNGSliCes' since 'SErviNGSliCes' is the strongest extension 
    (its strength is -1).
    """,
    training_examples=[
        {"input": {"class_name": 'my_class', "extensions": ['AA', 'Be', 'CC']}, "output": 'my_class.AA'}]
    ).compile(
        test_examples=[
            {"input": {"class_name": 'Watashi', "extensions": ['tEN', 'niNE', 'eIGHt8OKe']}, "output": 'Watashi.eIGHt8OKe'},
            {"input": {"class_name": 'Boku123', "extensions": ['nani', 'NazeDa', 'YEs.WeCaNe', '32145tggg']}, "output": 'Boku123.YEs.WeCaNe'},
            {"input": {"class_name": '__YESIMHERE', "extensions": ['t', 'eMptY', 'nothing', 'zeR00', 'NuLl__', '123NoooneB321']}, "output": '__YESIMHERE.NuLl__'},
            {"input": {"class_name": 'K', "extensions": ['Ta', 'TAR', 't234An', 'cosSo']}, "output": 'K.TAR'},
            {"input": {"class_name": '__HAHA', "extensions": ['Tab', '123', '781345', '-_-']}, "output": '__HAHA.123'},
            {"input": {"class_name": 'YameRore', "extensions": ['HhAas', 'okIWILL123', 'WorkOut', 'Fails', '-_-']}, "output": 'YameRore.okIWILL123'},
            {"input": {"class_name": 'finNNalLLly', "extensions": ['Die', 'NowW', 'Wow', 'WoW']}, "output": 'finNNalLLly.WoW'}
        ]
    )
