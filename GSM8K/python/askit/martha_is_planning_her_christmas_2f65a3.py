# Recompilation count: 0
def martha_is_planning_her_christmas_2f65a3(x1, x2, x3, x4, x5) -> int:
    # Martha is planning her Christmas party. She invited'x1'families with'x2'people and'x3'families with'x4'people.
    # 'x5'people couldn't come due to illness, and 1/4 that number had previous commitments.
    # How many people show up for Martha's party?

    # Total number of people invited
    total_invited = x1*x2 + x3*x4  

    # People who couldn't come
    didnt_come = x5 + x5//4  

    # People who showed up
    show_up = total_invited - didnt_come  

    return show_up