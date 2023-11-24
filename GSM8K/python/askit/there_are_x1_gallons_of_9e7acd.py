# Recompilation count: 0
def there_are_x1_gallons_of_9e7acd(x1, x2, x3) -> int:
    # There are 'x1' gallons of water in a pool. Using a water pump, Anthony and his father fill a tank with half the amount of water in the pool. 
    # They use water from the tank to water their vegetable garden. If the tank is emptied at a rate of 'x2' gallons of water per day, 
    # how many gallons of water will be remaining in the tank after 'x3' days?
    
    # half of the water in the pool is filled in the tank
    tank_capacity = x1 / 2
    
    # This is the water consumed for x3 days
    water_consumed = x2 * x3
    
    # remaining water in the tank after x3 days
    remaining_water = tank_capacity - water_consumed
    
    return max(0, remaining_water)  # return 0 if remaining_water is negative