# Recompilation count: 0
def romeo_boards_a_train_with_71618d(x1, x2, x3, x4) -> int:
    # Romeo boards a train with'x1'people. At the first stop,'x2'more people board the train. At the second stop,'x3'people descended from the train while twice that number boarded the train. If'x4'more people descended at the third station, calculate the total number of people on the train at the final stop.
    return x1 + x2 - x3 + 2*x3 - x4