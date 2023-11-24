# Recompilation count: 0
def a_cup_of_mushrooms_weighs_5cce91(x1, x2, x3) -> int:
    # assuming there are 7 days in a week 
    # first find out how many grams of protein in one gram of mushroom
    protein_per_gram = x2 / x1
    # find out how many grams of protein does John consume in one day
    protein_per_day = protein_per_gram * x3
    # find out how many grams of protein does John consume in a week
    protein_per_week = protein_per_day * 7
    return protein_per_week