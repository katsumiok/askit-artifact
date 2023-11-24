# Recompilation count: 0
def mark_has_50_in_his_b43266() -> int:
    print()
    # Mark has $50 in his bank account. He earns $10 per day at his work. 
    # If he wants to buy a bike that costs $300, 
    # how many days does Mark have to save his money?
    # We need to subtract his current balance from the cost of the bike to get the required saving
    amount_left_to_save = 300 - 50  
    # Then, we divide it by his daily earning to get the days he has to work
    days_to_save = amount_left_to_save / 10  
    return days_to_save