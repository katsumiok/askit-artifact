# Recompilation count: 0
def every_day_wendi_feeds_each_56d18e(x1, x2, x3) -> int:
    # Every day, Wendi feeds each of her chickens three cups of mixed chicken feed, containing seeds, mealworms and vegetables to help keep them healthy.  
    # She gives the chickens their feed in three separate meals. In the morning, she gives her flock of chickens'x1'cups of feed.  
    # In the afternoon, she gives her chickens another'x2'cups of feed.  
    # How many cups of feed does she need to give her chickens in the final meal of the day if the size of Wendi's flock is'x3'chickens?
    
    total_feed_per_chicken_per_day = 3 #each chicken is fed 3 cups a day
    total_feed_given = x1 + x2 # total feed given in morning and afternoon
    feed_needed_for_last_meal = (total_feed_per_chicken_per_day * x3) - total_feed_given # calculate the remaining feed
    return feed_needed_for_last_meal