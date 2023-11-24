# Recompilation count: 0
def helen_went_on_a_trip_688948(x1, x2) -> int:
    # Helen went on a trip through Germany. She booked a hotel for'x1'nights and rode the bus'x2'times during that trip. 
    # One night at the hotel was a cost of $80, and every bus trip was 10% of the price of one night at the hotel. 
    # How much did Helen pay for the hotel and bus travels during that trip?
    
    # Cost for hotel for x1 nights
    hotel_cost = x1 * 80
    
    # Cost for bus travels
    # As each bus trip costs 10% of the hotel night cost, which is $80, 
    # each bus trip costs $80 * 10/100 = $8
    bus_travel_cost = x2 * 8
    
    # Total cost is the sum of hotel cost and bus travel cost
    total_cost = hotel_cost + bus_travel_cost
    
    return total_cost