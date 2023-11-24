# Recompilation count: 0
def shiela_bought_five_cell_phones_4e1273(x1) -> int:
    # Shiela bought five cell phones for $150 each for a 3-month installment. A 2% interest will be charged for each unit. How much will Shiela pay each month for'x1'months?
    
    # calculate the total price of the phones without interest
    total_price = 150 * 5 

    # calculate the total interest
    total_interest = total_price * 0.02

    # add the interest to the total price
    total_price_with_interest = total_price + total_interest

    # divide the total price with interest by the number of months
    monthly_payment = total_price_with_interest / x1

    return monthly_payment