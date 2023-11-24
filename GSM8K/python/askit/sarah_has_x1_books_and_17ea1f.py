# Recompilation count: 0
def sarah_has_x1_books_and_17ea1f(x1, x2) -> int:
    # Sarah has 'x1' books and Joseph had twice the number of Sarah’s books, but he lost 'x2' of them. How many books does Joseph currently have?
    joseph_books = x1 * 2
    joseph_books_after_loss = joseph_books - x2
    return joseph_books_after_loss