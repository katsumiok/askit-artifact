# Recompilation count: 0
def candy_has_a_chair_rental_f8ad94(x1, x2) -> int:
    # Candy has a chair rental business. During the weekdays,'x1'chairs are rented each day; but during weekends,'x2'chairs are rented each day. If this continues, how many chairs in total will Candy be able to rent out in two 4-week months?

    # In a week, there are 5 weekdays and 2 weekends.
    # So in 4 weeks or a month, there are 20 weekdays and 8 weekends.
    # As there are two months, there will be 40 weekdays and 16 weekends
    # Multiply the number of chairs rented each day with the number of each type of day, then add those two results for the total chairs rented.
     
    return (x1 * 40) + (x2 * 16)