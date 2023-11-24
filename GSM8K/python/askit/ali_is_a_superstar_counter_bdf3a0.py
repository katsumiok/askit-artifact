# Recompilation count: 0
def ali_is_a_superstar_counter_bdf3a0(x1, x2, x3) -> int:
    # Ali is a superstar counter. He has won 'x1' medals for counting super fast. 
    # His friend Izzy is also a really good counter and has 'x2' less medals than Ali. 
    # Together they have 'x3' times less medals than have been given out for counting. 
    # How many medals have been given out for counting?

    # Calculate the number of medals that Izzy has
    izzy_medals = x1 - x2
    # Calculate the number of medals that Ali and Izzy together has
    total_medals = x1 + izzy_medals
    # Calculate the total medals given out for counting
    total_counting_medals = total_medals * x3
    return total_counting_medals