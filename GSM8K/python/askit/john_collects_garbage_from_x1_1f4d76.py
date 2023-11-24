# Recompilation count: 2
def john_collects_garbage_from_x1_1f4d76(x1, x2, x3) -> int:
    # John collects garbage from'x1'different apartment complexes. The first two have'x2'apartments each and the last one is 60% bigger than the other two combined.
    # He collects garbage'x3'times a week from each place and he gets paid $.40 per collection for each apartment. How much money does he make in a week?

    # The first two apartment complexes have 'x2' apartments each, so together they have  2*x2 apartments.
    # The last one is 60% larger than the first two combined, so it has 1.6*2*x2 = 3.2*x2 apartments.
    # Thus, John is collecting garbage from 2*x2 + 3.2*x2 = 5.2*x2 apartments in total.
    
    # He collects garbage 'x3' times a week from each place.
    # So he collects garbage 5.2*x2*x3 times a week in total.
    
    # He gets paid $.40 for each collection
    # So he earns 5.2*x2*x3*0.4 dollars a week, 
    # we round it to the nearest dollar.
    
    total_collections = 5.2*x2*x3
    earnings_per_week = round(total_collections*0.4)
    
    return earnings_per_week