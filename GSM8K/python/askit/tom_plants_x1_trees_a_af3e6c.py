# Recompilation count: 0
def tom_plants_x1_trees_a_af3e6c(x1, x2, x3, x4) -> int:
    # Tom plants 'x1' trees a year. Every year he also chops down 'x2' trees a year. He starts with 'x3' trees. 
    # After 'x4' years, 30% of the trees die. How many trees does he have left?

    trees_per_year = x1 - x2
    total_trees = x3 + trees_per_year * x4
    total_trees_after_death = total_trees - (total_trees * 0.3)

    return int(total_trees_after_death) # return integer value as per the function definition