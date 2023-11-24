# Recompilation count: 0
def there_are_x1_pupils_in_837219(x1) -> int:
    # There are'x1'pupils in a class. Half of the class likes blue. One-fourth of the remaining likes green and the rest likes yellow. How many pupils like the color yellow?
    blue_lovers = x1 / 2       # Half of the class likes blue
    remaining = x1 - blue_lovers   # Remaining students who like either green or yellow
    green_lovers = remaining / 4    # One-fourth of the remaining likes green
    yellow_lovers = remaining - green_lovers   # Rest of the remaining likes yellow
    
    return int(yellow_lovers)