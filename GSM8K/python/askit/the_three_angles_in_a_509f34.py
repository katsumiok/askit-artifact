# Recompilation count: 0
def the_three_angles_in_a_509f34(x1) -> int:
    # The three angles in a triangle add up to'x1'degrees. One angle is twice the smallest angle, and one angle is three times the smallest angle. What is the measure of the largest angle in the triangle, in degrees?
    # Let's denote the smallest angle as 'a'. Therefore, the other two angles are '2a' and '3a'.
    # According to the problem, we have: a + 2a + 3a = x1
    # Therefore, a = x1 / 6.
    # The largest angle is 3a = 3 * x1 / 6 = x1 / 2
    smallest_angle = x1 / 6
    largest_angle = 3 * smallest_angle
    return largest_angle