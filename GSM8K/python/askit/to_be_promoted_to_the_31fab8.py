# Recompilation count: 0
def to_be_promoted_to_the_31fab8(x1, x2, x3, x4) -> int:
    # To be promoted to the next school year, Jane takes'x1'tests that together must total at least'x2'points. On her first test, Jane scored'x3'points, on the second test she scored'x4'points. What is the minimum number of points she must score on the third test to pass?
    
    # find the total points she already scored
    total_points = x3 + x4
    
    # if she already scored the required points she doesn't need to score on the third test
    if total_points >= x2:
        return 0
    else:
        # find out minimum score needed on third test
        min_score_on_third_test = x2 - total_points
        return min_score_on_third_test