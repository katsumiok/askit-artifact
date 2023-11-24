# Recompilation count: 0
def the_book_is_printed_on_061031(x1) -> int:
    # The book is printed on paper that, when stacked, is 'x1' pages to the inch. 
    # Each paper is printed on both sides, with one page of the book printed on each side. 
    # How many pages are in the book, if it is 1.5 inches thick?

    # The total pages in 1 inch would be twice the x1 (since the paper is printed on both sides)
    total_pages_in_one_inch = 2 * x1

    # The total pages in 1.5 inches thick book would be total_pages_in_one_inch * 1.5
    total_pages_in_book = total_pages_in_one_inch * 1.5

    return int(total_pages_in_book)