# Recompilation count: 0
def the_highest_temperatur_ever_recorded_2c3406(x1, x2) -> int:
    # The highest temperatures ever recorded in three countries Southlandia, Northlandia and Midlandia 
    # are -48, x1 and -3 degrees Fahrenheit respectively.
    # The function calculates the average highest temperature of x2 number of these countries.
    # As x2 can be 1, 2, or 3 (representing one of the three, two of the three, or all three countries), 
    # we use conditions to select the countries to involve in the average calculation.

    Southlandia, Northlandia, Midlandia = -48, x1, -3
    if x2 == 1:
        return max(Southlandia, Northlandia, Midlandia)
    elif x2 == 2:
        return (max(Southlandia, Northlandia) + min(max(Southlandia, Midlandia), max(Northlandia, Midlandia))) // 2
    else: # x2 == 3
        return (Southlandia + Northlandia + Midlandia) // 3