# Recompilation count: 0
def mr_hezekiah_had_x1_trucks_71fbf5(x1, x2) -> int:
    # Mr Hezekiah had'x1'trucks from his store supplying fertilizer to different farmers in his hometown dispatched for delivery on a particular day. Each truck was carrying'x2'tons of fertilizer packed in bags. Two hours after the trucks had departed for delivery, Mr Hezekiah got the news that a quarter of the number of lorries dispatched for delivery had mechanical failures on the road and could not deliver the fertilizers to the farmers. 
    # Calculate the total number of tons of fertilizer that reached the farmers that day?

    # Number of trucks that didn't fail
    successful_trucks = x1 - (x1 * 0.25)

    # Total tons of fertilizers that reached the farmers
    total_fertilizers = successful_trucks * x2

    return total_fertilizers