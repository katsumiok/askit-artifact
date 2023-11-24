# Recompilation count: 0
def a_perfume_company_is_trying_2efeca(x1, x2, x3, x4) -> int:
    # A perfume company is trying to create new scents. They already have'x1'vanilla scents and'x2'fruity scents available and they need to decide which kind of scent to focus on. They decide to focus on whichever scent sells the most and monitor their number of sales as part of their research. By the end of the day, they sell'x3'of each of the vanilla scents and'x4'of each of the fruity scents available. How many more vanilla scents sold compared with the fruity scents?
    
    total_vanilla_sales = x1 * x3
    total_fruity_sales = x2 * x4
    
    return total_vanilla_sales - total_fruity_sales