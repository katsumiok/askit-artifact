# Recompilation count: 0
def mark_buys_a_fleet_of_c7f026(x1) -> int:
    # Mark buys a fleet of'x1'cars for his company.  Each car sells for $20,000.  He pays 10% tax on the cars and then another $1000 for registration on each of them.  How much does he pay for everything?
    car_price = 20000
    tax_rate = 0.1
    registration_fee = 1000
    total_price = x1 * (car_price + car_price * tax_rate + registration_fee)
    return int(total_price)