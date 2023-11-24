# Recompilation count: 0
def a_bumper_car_rink_has_00967f(x1, x2, x3, x4) -> int:
    # A bumper car rink has'x1'red cars. They have'x2'fewer green cars than they have red cars. They have'x3'times the number of blue cars as they have green cars. The rink also has yellow cars.  If the rink has'x4'cars in total how many yellow cars do they have?
    
    green_cars = x1 - x2 # Calculate the number of green cars
    blue_cars = green_cars * x3 # Calculate the number of blue cars

    # Subtract the numbers of red, green, and blue cars from the total to find the number of yellow cars
    yellow_cars = x4 - (x1 + green_cars + blue_cars)
    
    return yellow_cars