# Recompilation count: 0
def there_are_x1_plants_in_ea392f(x1) -> int:
    # There are 'x1' plants in Mrs. Smith's garden. One-fourth of her plants are indoor plants. 
    # Two-thirds of the remaining are outdoor plants while the rest are flowering plants. 
    # What percent of the plants are flowering plants?
    
    indoor_plants = x1 / 4
    remaining_plants = x1 - indoor_plants
    
    outdoor_plants = (2 / 3) * remaining_plants
    flowering_plants = remaining_plants - outdoor_plants
    
    percent_flowering_plants = (flowering_plants / x1) * 100
    
    return int(percent_flowering_plants)  