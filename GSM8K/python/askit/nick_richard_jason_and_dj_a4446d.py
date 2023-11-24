# Recompilation count: 0
def nick_richard_jason_and_dj_a4446d(x1, x2, x3, x4) -> int:
    # Nick, Richard, Jason and DJ each have paintball guns. DJ has 'x1' guns, Nick has 'x2' guns, RJ has 'x3' guns and Richard has 'x4' guns. 
    # If they were to share their guns equally, how many guns would each of them have?

    total_guns = x1 + x2 + x3 + x4
    guns_each = total_guns // 4

    return guns_each