# Recompilation count: 0
def cayley_markets_various_newspapers_to_04b783(x1, x2) -> int:
    # Cayley markets various newspapers to get a commission on each copy sold. He gets a 10% commission on each copy of the New York Times and an 8% commission on each of the Wall Street Journal. How much commission will he earn in total from the sales of'x1'copies of the New York Times and'x2'copies of Wall Street Journal if each costs $5 and $15 respectively?
    
    ny_times_price = 5
    ws_journal_price = 15

    ny_times_commission = 0.10
    ws_journal_commission = 0.08

    total_commission = (ny_times_price * x1 * ny_times_commission) + (ws_journal_price * x2 * ws_journal_commission)

    return int(total_commission)  # returning as integer as mentioned in the function definition