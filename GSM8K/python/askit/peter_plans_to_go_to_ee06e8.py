# Recompilation count: 0
def peter_plans_to_go_to_ee06e8(x1) -> int:
    # Peter plans to go to the movies this week. He always gets a ticket for $7 and popcorn for $7. 
    # If he has 'x1' dollars for the week, how many times can he go to the movies?
    cost_per_movie = 7 + 7  # cost of ticket and popcorn
    return x1 // cost_per_movie  # integer division gives the number of times he can afford to go to the movies