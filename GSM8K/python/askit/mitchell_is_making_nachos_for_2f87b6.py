# Recompilation count: 0
def mitchell_is_making_nachos_for_2f87b6(x1) -> int:
    # Mitchell is making nachos for his family. He buys two bags of chips with'x1'chips 
    # each. If his family has five members, how many chips does each person get 
    # if they all get the same number?
    total_chips = x1 * 2 
    chips_per_person = total_chips // 5
    return chips_per_person