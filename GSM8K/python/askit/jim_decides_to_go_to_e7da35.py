# Recompilation count: 0

def jim_decides_to_go_to_e7da35(x1) -> int:
    # Given values
    loan_per_year = 50000  # Loan amount per year
    initial_income = 25000  # Income before going to college
    increased_factor = 3   # Factor by which income increases after college
    
    # Calculate total loan and opportunity cost (income lost by going to college)
    total_loan = loan_per_year * x1
    opportunity_cost = initial_income * x1
    
    # New income after college
    new_income = initial_income * increased_factor
    
    # Return time in years to earn money equivalent to the loans and opportunity cost, rounded up
    # since we need full years
    return int((total_loan + opportunity_cost) / new_income)