# Recompilation count: 0

def gus_spent_20_00_at_73ccea(x1) -> int:
    # Gus spent $20.00 at the grocery store.  He bought'x1'bag of chips for $2.00 each, a bucket of fried chicken for $8.00 and a bottle of soda for $1.00.  How much did the apple pie cost?
    
    total_chips_price = x1 * 2
    total_fried_chicken_price = 8
    total_soda_price = 1

    total_spent = 20

    apple_pie_price = total_spent - (total_chips_price + total_fried_chicken_price + total_soda_price)
    
    return apple_pie_price