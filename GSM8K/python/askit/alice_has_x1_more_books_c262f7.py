# Recompilation count: 0
def alice_has_x1_more_books_c262f7(x1, x2) -> int:
    # Alice has'x1'more books than Steven. Clara has two times as many books as Steven. If Clara has'x2'books, how many more books does Clara have than Alice?
    # first, we find out how many books Steven has, Clara has x2 books which are twice the number of books Steven has
    Steven_books = x2 // 2
    # Secondly, find out how many books Alice has, Alice has x1 books more than Steven.
    Alice_books = Steven_books + x1
    # Now, we simply subtract number of books Alice has from number of books Clara has.
    return x2 - Alice_books