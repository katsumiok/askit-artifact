# Recompilation count: 0
def a_tank_has_a_capacity_a34c8b(x1) -> int:
    # A tank has a capacity of'x1'gallons. Wanda and Ms. B decided to pump water from a pond to fill the tank in two days. On the first day, working in shifts, Wanda filled 1/4 of the tank's capacity with water, and Ms. B pumped 3/4 as much water as Wanda pumped into the tank that day. On the second day, Wanda pumped 2/3 of the amount of water she pumped on the previous day, while Ms. B only pumped 1/3 of the number of gallons she pumped on the first day. How many gallons of water are remaining for the tank to be full?
    
    # On the first day, Wanda filled 1/4 of the tank's capacity
    wanda_day1 = 1/4 * x1

    # Ms. B pumped 3/4 as much water as Wanda pumped into the tank that day
    b_day1 = 3/4 * wanda_day1

    # On the second day, Wanda pumped 2/3 of the amount of water she pumped on the previous day
    wanda_day2 = 2/3 * wanda_day1

    # Ms. B only pumped 1/3 of the number of gallons she pumped on the first day
    b_day2 = 1/3 * b_day1

    # Total amount of water pumped into the tank
    total_water_pumped = wanda_day1 + wanda_day2 + b_day1 + b_day2

    # Amount of water remaining for the tank to be full
    return x1 - total_water_pumped