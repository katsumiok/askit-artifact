# Recompilation count: 0

def a_salesman_bought_a_case_191502(x1, x2) -> int:
    # A salesman bought a case of'x1'sneakers for $576. He sold'x2'of them for $20 at a flash sale on Monday, 
    # and the rest were sold to a department store for $25 each throughout the rest of the week. 
    # How much money, in dollars, was the salesman's profit?
    money_from_flash_sale = x2 * 20
    remaining_sneakers = x1 - x2
    money_from_department_store = remaining_sneakers * 25
    total_sales = money_from_flash_sale + money_from_department_store
    profit = total_sales - 576
    return profit