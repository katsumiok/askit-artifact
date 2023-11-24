# Recompilation count: 0
def zaid_spends_1_4_of_9afa89() -> int:
    # Zaid spends 1/4 of his salary on rent, 1/3 on car fuel and donates half of the remaining amount to his favorite charity.
    # He gives his daughter 200$ to use for her weekly expenses and 700$ to his wife to budget for groceries and other household goods.
    # If Zaid earns 6000$ per month, how much money will he still have after all these expenses and donations?
    initial_salary = 6000
    rent = initial_salary / 4
    car_fuel = initial_salary / 3
    remaining_after_rent_and_fuel = initial_salary - rent - car_fuel
    charity_donation = remaining_after_rent_and_fuel / 2
    daughter_expense = 200
    wife_expense = 700
    remaining_salary = remaining_after_rent_and_fuel - charity_donation - daughter_expense - wife_expense
    return int(remaining_salary)