# Recompilation count: 0
def four_books_are_arranged_on_357069(x1, x2, x3) -> int:
    # Four books are arranged on a shelf. The first book is'x1'mm thick while the second book is'x2'mm thick. The third book is'x3'mm less thick than the second book, and the fourth book is twice as thick as the first book. What is the total thickness of the four books?
    third_book_thickness = x2 - x3  # thickness of the third book
    fourth_book_thickness = 2 * x1  # thickness of the fourth book
    total_thickness = x1 + x2 + third_book_thickness + fourth_book_thickness  # total thickness of four books
    return total_thickness