# Recompilation count: 2
def sasha_notices_that_prices_for_ef4444(x1, x2, x3, x4, x5, x6) -> int:
    # Sasha notices that prices for lumber have gone up 50% in the last few months after she bought some lumber. 
    # Since she has leftovers, she decides to sell them. She has leftover ten'x1'x'x2'x'x3'boards that cost 
    # her $10 each. She also has five'x4'x'x5'x'x6'boards she bought for $16 each. 
    # If she sells them all, how much profit does she make?

    initial_cost_x1_x2_x3 = 10 * 10 # cost of ten 'x1'x'x2'x'x3' boards
    initial_cost_x4_x5_x6 = 5 * 16  # cost of five 'x4'x'x5'x'x6' boards

    total_initial_cost = initial_cost_x1_x2_x3 + initial_cost_x4_x5_x6 # total initial cost 

    selling_price_x1_x2_x3 = 1.5 * initial_cost_x1_x2_x3 # Selling price of 'x1'x'x2'x'x3' boards after increasing by 50%
    selling_price_x4_x5_x6 = 1.5 * initial_cost_x4_x5_x6 # Selling price of 'x4'x'x5'x'x6' boards after increasing by 50%
  
    total_selling_price = selling_price_x1_x2_x3 + selling_price_x4_x5_x6 # Total selling price

    profit = total_selling_price - total_initial_cost # Profit after selling all boards
    
    return profit