# Recompilation count: 0
def maddy_is_buying_pizza_for_1c18e6(x1, x2, x3, x4) -> int:
    # Maddy is buying pizza for her cousin's soccer game. There are 'x1' team members and 'x2' coaches. 
    # Each team member brings 'x3' guests. A pizza serves 'x4' people. 
    # If each pizza costs $15, how many dollars will Maddy spend?
    
    # Calculate total number of people
    total_people = x1 + x2 + (x1 * x3)  # team members + coaches + guests
    
    # Calculate total number of pizzas
    total_pizzas = total_people // x4 if total_people % x4 == 0 else total_people // x4 + 1
    
    # Calculate total cost
    total_cost = total_pizzas * 15  # cost of each pizza is $15
    
    return total_cost