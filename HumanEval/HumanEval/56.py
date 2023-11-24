from typing import List
from pyaskit import defun_hinted, define_hinted

correct_bracketing = define_hinted(
    bool,
    """
    Checks if every opening bracket within {{brackets}} (a string of "<" and ">") has a corresponding closing bracket.
    """,
    training_examples=[
        {"input": {"brackets": '<'}, "output": False},
        {"input": {"brackets": '<>'}, "output": True},
        {"input": {"brackets": '<<><>>'}, "output": True},
        {"input": {"brackets": '><<<>'}, "output": False}]
    ).compile(
        test_examples=[
            {"input": {"brackets": '<>'}, "output": True},
            {"input": {"brackets": '<<><>>'}, "output": True},
            {"input": {"brackets": '<><><<><>><>'}, "output": True},
            {"input": {"brackets": '<><><<<><><>><>><<><><<>>>'}, "output": True},
            {"input": {"brackets": '<<<><>>>>'}, "output": False},
            {"input": {"brackets": '><<<>'}, "output": False},
            {"input": {"brackets": '<'}, "output": False},
            {"input": {"brackets": '<<<<'}, "output": False},
            {"input": {"brackets": '>'}, "output": False},
            {"input": {"brackets": '<<>'}, "output": False},
            {"input": {"brackets": '<><><<><>><>><<>'}, "output": False},
            {"input": {"brackets": '<><><<><>><>>><>'}, "output": False}
        ]
    )
