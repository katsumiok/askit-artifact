# Recompilation count: 0
def there_are_x1_books_in_b072a7(x1) -> int:
    # There are'x1'books in a small library. Half of them are written in English, and 10% in German. All others are written in Spanish. How many Spanish books are there?
    english_books = x1 * 0.5
    german_books = x1 * 0.1
    spanish_books = x1 - (english_books + german_books)
    return int(spanish_books)