# Recompilation count: 0
def every_month_madeline_has_to_ebcf98(x1) -> int:
    # Every month, Madeline has to buy food, treats, and medicine for her dog. 
    # food costs $25 per week. Treats cost $20 per month. Medicine costs $100 per month. 
    # How much money does Madeline spend on her dog per year if there are'x1'weeks in a month?
   
    food_cost_per_month = x1 * 25
    treats_cost_per_month = 20
    medicine_cost_per_month = 100
    total_cost_per_month = food_cost_per_month + treats_cost_per_month + medicine_cost_per_month
    total_cost_per_year = total_cost_per_month * 12
    
    return total_cost_per_year