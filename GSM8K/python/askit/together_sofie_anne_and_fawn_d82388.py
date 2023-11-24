# Recompilation count: 0
def together_sofie_anne_and_fawn_d82388(x1, x2, x3) -> int:
    # Together, Sofie, Anne, and Fawn have 'x1' books. 
    # If Sofie has 'x2' more books than Anne, and Anne has 'x3' fewer books than Fawn does, 
    # how many books does Fawn have?

    # Since Sofie has 'x2' more books than Anne, let Anne's count be 'a'
    # Therefore, Sofie's count is 'a + x2'
    # Also, Anne has 'x3' fewer books than Fawn, so Fawn's count is 'a + x3'

    # As per the condition, Fawn + Anne + Sofie = 'x1'
    # => (a + x3) + a + (a + x2) = x1
    # => 3a + x2 + x3 = x1
    # Therefore 'a' can be expressed as:

    a = (x1 - x2 - x3) / 3

    # Since the count of books must be integer, rounding off 'a' to the nearest integer:
    a = round(a)

    # The number of books Fawn has is 'a + x3'
    return a + x3