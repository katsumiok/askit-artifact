# Recompilation count: 0
def a_singer_has_x1_microphone_816b88(x1) -> int:
    # A singer has'x1'microphones that he wants to arrange in pairs on a stage. While making the arrangement, he realizes that 20% of the microphones won't find any space to fit in after arranging the rest in pairs. How many pairs of microphones was he able to arrange on the stage?
    # calculate the number of microphones that fit in pairs
    in_pairs = x1 * 0.8
    # return the number of pairs, dividing by 2 because a pair consists of two microphones
    return int(in_pairs / 2)