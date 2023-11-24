# Recompilation count: 0
def mr_maxim_works_at_the_bea666(x1, x2, x3) -> int:
    # Mr. Maxim works at The Best Cookeries Around restaurant. On a particular day,'x1'people entered the restaurant in the morning to eat. At around 10:00,'x2'more people entered the restaurant and ordered the same amount of food as the first people. After a while, twice the number of people who entered the restaurant at 10:00 came in and ordered lunch. By evening, an additional'x3'times as many people as the number that came in first had entered the restaurant. Calculate the total number of people that entered the restaurant on that day.
    
    # calculate number of people who entered at 10:00, it's x2
    people_at_10 = x2
    
    # calculate number of people who entered after a while, twice the number of people who entered at 10:00
    people_after_a_while  = 2 * people_at_10 
    
    # calculate number of people that entered by evening, an additional x3 times as many people as the number that came in first
    people_in_evening = x3 * x1

    # Find total number of people
    total_people = x1 + people_at_10 + people_after_a_while + people_in_evening

    # Return total number of people
    return total_people