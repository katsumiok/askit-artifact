# Recompilation count: 0
def luke_ate_x1_hot_dogs_852c23(x1) -> int:
    # Luke ate'x1' hot dogs. Thomas ate three times more hot dogs than Luke.
    thomas_hot_dogs = x1 * 3

    # John ate half the amount Thomas ate.
    john_hot_dogs = thomas_hot_dogs / 2

    # How many more hot dogs did John eat than Luke?
    return john_hot_dogs - x1