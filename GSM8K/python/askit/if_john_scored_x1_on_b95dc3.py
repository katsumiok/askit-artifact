# Recompilation count: 0
def if_john_scored_x1_on_b95dc3(x1: int, x2: int, x3: int, x4: int) -> int:
    # If John scored'x1'on his first'x2'tests and an'x3'on his 4th, what was his average score across the'x4'tests?
    total_score = (x1 * x2) + x3  # total score after 'x4' tests
    average_score = total_score // x4  # integer division to get the average as integer
    return average_score