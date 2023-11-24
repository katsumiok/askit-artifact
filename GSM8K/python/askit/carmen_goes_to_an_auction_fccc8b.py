# Recompilation count: 0
def carmen_goes_to_an_auction_fccc8b(x1, x2) -> int:
    # Carmen goes to an auction to win an antique desk. She accepts the opening bid of $200 and continues bidding until she wins. The bids on the desk rise by $50 each time and 'x1' other people each bid once. Carmen bids after each of the 'x2' other people and eventually wins. How much money, in dollars, does the desk cost her?
    
    # Initial bid was $200
    # 'x1' other people each bid once, increasing the bid by $50 each time
    # Carmen has to bid after each of the 'x2' other people, increasing the bid by $50 each time
    return 200 + (x1 + x2) * 50