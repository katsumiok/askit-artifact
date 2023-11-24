# Recompilation count: 7
def an_airport_has_only_x1_c9a352(x1, x2) -> int:
    # An airport has only'x1'planes that fly multiple times a day. Each day, the first plane goes to Greece for three-quarters of its flights, and the remaining flights are split equally between flights to France and flights to Germany. The other plane flies exclusively to Poland, and its 'x2' trips only amount to half the number of trips the first plane makes throughout each day. How many flights to France does the first plane take in one day?
    
    # calculate the total flights of the first plane
    total_flights_first = 2 * x2

    # calculate the flights to Greece
    flights_to_greece = 3/4 * total_flights_first

    # calculate the remaining flights
    remaining_flights = total_flights_first - flights_to_greece

    # the remaining flights are split equally between flights to France and flights to Germany
    flights_to_france = remaining_flights / 2

    return int(flights_to_france)