# Recompilation count: 0
def in_a_company_of_x1_cf566f(x1) -> int:
    # In a company of 'x1' employees, 20% of the employees are management.  
    # Out of this 20%, only 30% oversee the entire company.  
    # How many employees oversee the company?
    management = 0.20 * x1
    oversee_company = 0.30 * management
    return round(oversee_company)