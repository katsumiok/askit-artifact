# Recompilation count: 0
def felix_notices_that_kids_in_3a3006() -> int:
    # Felix notices that kids in the neighborhood are always getting things stuck in trees.
    # Since he is an expert tree climber, he decided to start charging kids to get their stuff out.
    # He charges based on how high he has to climb. Every branch he has to climb up costs $.25. 
    # During the week he made $105. On average, how many branches did he climb per day?

    # total money earned by Felix
    total_money = 105  
    # cost per branch climb
    cost_per_branch = 0.25 
    # total branches he climbed the whole week
    total_branches = total_money / cost_per_branch 
    # branches climbed per day
    branches_per_day = total_branches / 7  # as there are 7 days in a week
    
    return round(branches_per_day)  # rounding off to the nearest integer as branch count has to be a whole number