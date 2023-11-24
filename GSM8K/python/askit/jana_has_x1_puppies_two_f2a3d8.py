# Recompilation count: 0
def jana_has_x1_puppies_two_f2a3d8(x1) -> int:
    # Jana has'x1'puppies. Two thirds of Jana's puppies are Pomeranians. One third of the Pomeranians are girls. How many girl Pomeranians does Jana have?
    pomeranians = x1 * 2 / 3
    girl_pomeranians = pomeranians / 3
    return int(girl_pomeranians)