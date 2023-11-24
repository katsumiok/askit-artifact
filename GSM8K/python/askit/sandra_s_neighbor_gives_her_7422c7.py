# Recompilation count: 0
def sandra_s_neighbor_gives_her_7422c7(x1, x2, x3) -> int:
    # Sandra's neighbor gives her a basket of'x1'eggs every time she babysits their daughter. To make a Spanish flan, she needs'x2'eggs. If Sandra has been tasked to make'x3'Spanish flans for her school fundraiser, how many times does Sandra have to babysit?
    total_eggs_needed_for_flan = x2 * x3
    times_sandra_has_to_babysit = total_eggs_needed_for_flan // x1
    if total_eggs_needed_for_flan % x1 > 0: # if there is a remainder, Sandra needs to babysit one more time
        times_sandra_has_to_babysit += 1
    return times_sandra_has_to_babysit