# Recompilation count: 0
def bob_spends_27000_distribute_between_f9fa6b(x1, x2) -> int:
    # Bob spends $27000 distributed between'x1'schools to buy books.  He can buy'x2'books for $500.  How many books can he buy per school?
    total_books = (27000 / 500) * x2  # Total number of books Bob can buy with $27000
    books_per_school = total_books // x1  # Number of books he can buy per school
    return int(books_per_school)