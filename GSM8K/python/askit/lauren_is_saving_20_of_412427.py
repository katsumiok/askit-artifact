# Recompilation count: 0
def lauren_is_saving_20_of_412427(x1) -> int:
    # Lauren is saving 20% of every paycheck. How many more years does Lauren need to work 
    # if she plans to save for a retirement period of'x1'years, 
    # live with 40% of her current annual salary, and her current salary is $100,000?
    
    current_salary = 100000
    saving_rate = 0.20 # 20% she saves from every paycheck
    retirement_living_rate = 0.40 # 40% of her current salary she plans to live on during retirement
    
    # Savings she achieves each year
    yearly_savings = current_salary * saving_rate
    
    # Amount she plans to spend each retirement year
    retirement_yearly_expenditure = current_salary * retirement_living_rate
    
    # Total amount she needs to save for the retirement
    total_savings_needed = retirement_yearly_expenditure * x1
    
    # Years she needs to work more to achieve the total savings needed
    years_to_work = total_savings_needed / yearly_savings
    
    # Round up to the next full year as a fraction of year also means a full year in real life
    if years_to_work > int(years_to_work):
        years_to_work = int(years_to_work) + 1
    
    return years_to_work