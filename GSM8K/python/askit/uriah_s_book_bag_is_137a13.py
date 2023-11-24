# Recompilation count: 0
def uriah_s_book_bag_is_137a13(x1, x2) -> int:
    # Uriah's book bag is getting too heavy for him. He needs to remove 'x1' pounds from it. His comic books weigh 1/4 pound each and his toys weigh 1/2 pound each. If he removes 'x2' comic books, how many toys does he need to remove?
    total_weight_to_remove = x1
    weight_of_comic_books_removed = x2 * 0.25
    remaining_weight_to_remove = total_weight_to_remove - weight_of_comic_books_removed
    number_of_toys_to_remove = int(remaining_weight_to_remove / 0.5)

    return number_of_toys_to_remove