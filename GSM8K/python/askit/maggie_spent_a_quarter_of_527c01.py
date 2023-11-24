# Recompilation count: 0
def maggie_spent_a_quarter_of_527c01() -> int:
    # Maggie spent a quarter of her money, while Riza spent one-third of her money. They each had $60. How much money do the two of them have left?
    maggie_original = 60
    riza_original = 60

    # A quarter of Maggie's money
    maggie_spent = maggie_original / 4

    # One-third of Riza's money
    riza_spent = riza_original / 3

    # Calculate the amount left
    maggie_left = maggie_original - maggie_spent
    riza_left = riza_original - riza_spent

    # Total left
    total_left = maggie_left + riza_left
    
    return int(total_left)