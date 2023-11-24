# Recompilation count: 0
def while_playing_with_her_friends_138135(x1, x2) -> int:
    # While playing with her friends in their school playground, Katelyn saw'x1' fairies flying above the nearby forest. After about twenty minutes, one of her friends saw half as many fairies as Katelyn saw come from the east and join the fairies that were there. Ten minutes later,'x2' fairies flew away. How many fairies are remaining?
    remaining_fairies = x1 + (x1 // 2) - x2
    return remaining_fairies