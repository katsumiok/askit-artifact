# Recompilation count: 0
def cody_and_trevor_had_x1_4caa41(x1) -> int:
    # Cody and Trevor had 'x1' sandwiches. Cody ate a third of the sandwiches, and Trevor ate a quarter of the sandwiches. How many sandwiches are left?
    sandwiches_eaten_by_cody = x1 / 3
    sandwiches_eaten_by_trevor = x1 / 4
    sandwiches_left = x1 - sandwiches_eaten_by_cody - sandwiches_eaten_by_trevor
    return int(sandwiches_left)