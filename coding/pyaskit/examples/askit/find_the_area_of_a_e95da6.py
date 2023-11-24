# Recompilation count: 0


def find_the_area_of_a_e95da6(s1, s2, s3) -> float:
    # Find the area of a triangle given its three sides 's1', 's2', and 's3'.
    # Using Heron's formula
    semi_perimeter = (s1 + s2 + s3) / 2
    area = (semi_perimeter * (semi_perimeter - s1) * (semi_perimeter - s2) * (semi_perimeter - s3)) ** 0.5
    return area