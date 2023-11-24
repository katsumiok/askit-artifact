# Recompilation count: 0
def when_sophie_watches_her_nephew_876757(x1, x2, x3) -> int:
    # When Sophie watches her nephew, she gets out a variety of toys for him. The bag of building blocks has'x1'blocks in it. The bin of stuffed animals has'x2'stuffed animals inside. The tower of stacking rings has'x3'multicolored rings on it. Sophie recently bought a tube of bouncy balls, bringing her total number of toys for her nephew up to 62. How many bouncy balls came in the tube?
    total_toys = 62
    bouncy_balls = total_toys - (x1 + x2 + x3)
    return bouncy_balls