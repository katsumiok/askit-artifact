# Recompilation count: 0
def given_the_lengths_of_the_f8c628(a: float, b: float, c: float) -> bool:
    # Given the lengths of the three sides of a triangle 'a', 'b', 'c'. Return True if the three
    # sides form a right-angled triangle, False otherwise.
    sides = sorted([a, b, c])
    return sides[0]**2 + sides[1]**2 == sides[2]**2