# Recompilation count: 0
def andy_s_car_fuel_efficiency_05ed00(x1, x2) -> int:
    GAS_PRICE = 3  # price per gallon 
    WEEKDAYS = 5
    round_trip_distance = x2 * 2 * WEEKDAYS  # Andy travels to work and back home, So the distance is doubled and multiplied by weekdays.
    fuel_consumption = round_trip_distance / x1  # total miles/efficiency
    money_spent = GAS_PRICE * fuel_consumption
    return round(money_spent)