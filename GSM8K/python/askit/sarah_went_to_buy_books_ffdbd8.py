# Recompilation count: 0
def sarah_went_to_buy_books_ffdbd8(x1) -> int:
    # Sarah went to buy books from the store and spent $300 on the books. 
    # If each book was $15 and she gave an equal number of books to her 'x1' kids, how many books did each child get?

    # First, we calculate the total number of books Sarah bought by dividing the total money spent $300 by the price per book $15.
    total_books = 300 // 15

    # Then, we distribute the books equally among the kids.
    # The number of books each child gets is the total number of books divided by the number of kids 'x1'.
    books_per_child = total_books // x1
    
    
    return books_per_child