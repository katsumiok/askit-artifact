# Recompilation count: 0
def wendy_wants_to_place_x1_5e10d1(x1, x2, x3) -> int:
    # Wendy wants to place'x1'more than double the number of books in a shelving system with'x2'rows and'x3'columns. How many books will she need to carry to complete her task?
    double_books_in_shelve = 2 * x2 * x3
    extra_books_wendy_wants_to_place = x1
    total_books_wendy_needs_to_carry = double_books_in_shelve + extra_books_wendy_wants_to_place
    return total_books_wendy_needs_to_carry