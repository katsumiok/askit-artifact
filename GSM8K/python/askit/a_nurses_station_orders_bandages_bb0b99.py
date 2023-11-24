# Recompilation count: 1
def a_nurses_station_orders_bandages_bb0b99(x1, x2) -> int:
    # Each bulk pack of bandages contains 50 bandages.
    # On the first day, number of bandage used is 'x1'.
    # On the second day, they used ten fewer bandages than the first day, so it is 'x1' - 10.
    # On the third day, they used half a pack, i.e., 50 * 0.5 = 25 bandages.
    # They ordered one bulk pack on first day and two bulk packs on third day, so total 3*50 = 150 bandages ordered.
    # The remaining bandages at the end of the third day are 'x2'.
    # Therefore, the starting number of bandages on the first day would be the total number of bandages used + remaining bandages - bandages ordered.

    total_bandages_used = x1 + (x1 - 10) + 25
    bandages_ordered = 150
    remaining_bandages = x2
    starting_bandages_day_one = total_bandages_used + remaining_bandages - bandages_ordered
    
    return starting_bandages_day_one