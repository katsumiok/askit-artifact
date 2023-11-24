# Recompilation count: 0
def a_company_bought_400000_worth_19dfcc() -> int:
    total_cost = 400000
    faulty_percentage = 40 / 100 # 40%
    faulty_equipment_cost = total_cost * faulty_percentage
    functioning_equipment_cost = total_cost - faulty_equipment_cost
    return functioning_equipment_cost