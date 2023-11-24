# Recompilation count: 0
def the_population_of_porcupines_in_7680f2(x1) -> int:
    # The population of porcupines in a park is 50. 
    # The number of female porcupines is 3/5 of the total population. 
    # If each female porcupine gives birth to'x1'babies every month, 
    # how many porcupines will be in the park after a year?
    
    initial_population = 50
    female_porcupines = (3/5) * initial_population
    babies_per_month = x1
    
    # Since the period is for a year, and a year has 12 months,
    # the total new porcupines in a year would be:
    new_porcupines_per_year = female_porcupines * babies_per_month * 12
    
    # Adding the new porcupines per year to the initial population gives us the total population in a year
    total_population_in_a_year = initial_population + new_porcupines_per_year
    
    return int(total_population_in_a_year)  # return as integer