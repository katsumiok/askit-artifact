# Recompilation count: 0
def james_gets_a_job_selling_e73115(x1) -> int:
    # James gets a job selling used cars.  He sold'x1'cars that cost $25,000 each.
    # The company paid 30% of that price to acquire the cars.  He got a 10% commission on the profits.
    car_price = 25000
    acquisition_cost_percent = 0.3
    commission_percent = 0.1
    total_revenue = car_price * x1
    car_acquisition_cost = car_price * acquisition_cost_percent * x1
    profit = total_revenue - car_acquisition_cost
    james_commission = profit * commission_percent
    return int(james_commission)