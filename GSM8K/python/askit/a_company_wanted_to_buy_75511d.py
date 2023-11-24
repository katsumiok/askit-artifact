# Recompilation count: 0
def a_company_wanted_to_buy_75511d(x1) -> int:
    # A company wanted to buy'x1'computers and had $700 for each computer. 
    # However, when they went to order, they realized the price of each computer was 10% higher than they had planned for. 
    # Calculate the total amount of money they paid to buy the computers at the new prices.
    planned_price_per_computer = 700
    price_increase = 0.10
    actual_price_per_computer = planned_price_per_computer + (planned_price_per_computer * price_increase)
    total_paid = x1 * actual_price_per_computer
    return total_paid