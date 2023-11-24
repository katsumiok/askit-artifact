# Recompilation count: 0
def teddy_finished_half_of_a_185e18(x1, x2) -> int:
    # Teddy finished half of a'x1'piece puzzle, and then started and finished another'x2'piece puzzle within an hour.
    # Therefore he placed half of the pieces of the first puzzle and all pieces of the second one.
    # Assuming he finishes every puzzle he starts, he placed x1/2 + x2 pieces.
    return int(x1/2 + x2)