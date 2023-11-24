# Recompilation count: 0
def anna_is_trying_to_buy_4af320(x1) -> int:
    # Anna is trying to buy books for her local library. She had a budget of $16, and she has already spent $4. 
    # She also bought'x1'books today, and both books cost her the same amount of money. 
    # If Anna has $2 left in her budget, how much did each of the books cost?

    # Total money spent by Anna is initial budget - remaining budget
    total_money_spent = 16 - 2  # $14

    # From this total, we subtract the initially spent amount to get the cost of the books
    total_money_spent_on_books = total_money_spent - 4  # $10

    # As the cost of each book is the same, we simply divide the total money spent on books by the number of books (x1)
    cost_per_book = total_money_spent_on_books / x1  
   
    return cost_per_book