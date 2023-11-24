# Recompilation count: 0
def valerie_earns_5000_per_month_574971() -> int:
    # Valerie earns $5000 per month, 1/2 of what her brother earns. If their mother earns twice their combined salary, what's the total amount of money they all have together?
    valerie_salary = 5000
    brother_salary = valerie_salary * 2
    mother_salary = (valerie_salary + brother_salary) * 2
    total_salary = valerie_salary + brother_salary + mother_salary
    return total_salary