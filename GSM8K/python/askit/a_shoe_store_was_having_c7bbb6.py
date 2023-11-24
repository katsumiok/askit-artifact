# Recompilation count: 0
def a_shoe_store_was_having_c7bbb6(x1) -> int:
    # On Friday the store sold 'x1' pairs of tennis shoes.
    # On Saturday they sold double that number.
    # On Sunday, they sold half of the Saturday's sale
    # But, six people returned their pairs because they didn't fit.
    # Hence, subtraction of 6 from total sales
    total = x1 + 2*x1 + (x1) - 6
    return total