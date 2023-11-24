# Recompilation count: 0
def two_thirds_of_jana_s_142248(x1) -> int:
    # Two thirds of Jana's puppies are Pomeranians. One third of the Pomeranians are girls. If there are 'x1' Pomeranian girls, how many puppies does Jana have?
    # Given 'x1' is the Pomeranian girls which is one third of all pomeranians, thus all Pomeranians are x1*3
    # Given that two thirds of all puppies are pomeranians, thus all puppies are (x1*3)/(2/3) = x1*3*(3/2)
    return x1*3*(3/2)