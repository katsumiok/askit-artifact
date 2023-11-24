# Recompilation count: 0
def mark_s_car_breaks_down_47e188(x1) -> int:
    # Mark's car breaks down and he needs to get a new radiator.  
    # The cost for a new radiator is $400 but he goes to get it at a junk shop and gets it for 80% off.  
    # He then hires a mechanic to install it and it takes'x1'hours at $50 an hour.  
    # How much did he pay?
    radiator_price = 400
    discount = 0.8
    mechanic_rate = 50

    discounted_radiator_price = radiator_price * (1 - discount)
    mechanic_charges = x1 * mechanic_rate

    total_cost = discounted_radiator_price + mechanic_charges

    return total_cost