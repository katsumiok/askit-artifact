# Recompilation count: 0
def norman_high_school_enrolls_an_ad71b4(x1) -> int:
    # Norman High School enrolls an average of'x1'students every year. Butler High School, the neighboring school, enrolls an average of 3/4 as many students as Norman High School. How much greater is the average enrollment at Norman High School than the enrollment at Butler High School?
    butler_enrollment = x1 * 3/4
    difference = x1 - butler_enrollment
    return int(difference)