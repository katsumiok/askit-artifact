# Recompilation count: 0
def bubbles_collects_stuffed_animals_she_e27963() -> int:
    # calculate total existing stuffed animals
    total_existing_animals = 3 + 5 + 2 + 4
    # calculate the number of goats to make it 30% of total (math ceil is used to get the integer value by rounding up in case of fractional values)
    total_goats = int((0.3 * total_existing_animals) / (1 - 0.3)) 
    return total_goats