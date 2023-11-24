# Recompilation count: 0
def there_are_x1_rooms_at_359114(x1, x2) -> int:
    # There are 'x1' rooms at the KozyInn Motel. It takes housekeeping 'x2' minutes to clean each room.
    # Calculate how many hours would it take to clean one-half of the rooms.
   
    number_of_rooms_to_clean = x1 / 2 # calculate number of rooms to clean
    total_minutes = number_of_rooms_to_clean * x2 # calculate the total minutes it'd take
   
    # Convert total minutes to hours
    total_hours = total_minutes / 60
    
    return total_hours