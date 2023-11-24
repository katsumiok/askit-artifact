# Recompilation count: 0
def jason_works_as_a_salesperso_335a3b(x1, x2, x3) -> int:
    # Jason works as a salesperson at a car dealership.  He needs to sell 'x1' cars this month to earn a big bonus.  
    # He knows based on historical averages, that for every 'x2' telephone calls he makes to potential customers, he gets one person to come into the car dealership to look at new cars.  
    # And for every two customers that come into the car dealership, one will buy a car.  
    # Based on these average numbers, how many telephone calls would Jason need to make to sell 'x3' cars and earn his bonus?

    # First, we need to figure out how many customers need to come into the dealership to buy 'x3' cars. 
    # Since for every two customers that come in, one will buy a car, we need 'x3' * 2 customers to come in.
    
    customers_needed = x3 * 2

    # Now, we need to figure out how many calls Jason needs to make to get 'customers_needed' to come in. 
    # Since for every 'x2' calls he makes, one person comes in, we multiply 'customers_needed' by 'x2' to get the total number of calls.

    calls_needed = customers_needed * x2

    return calls_needed