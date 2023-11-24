# Recompilation count: 0
def maria_buys_x1_shares_of_96bd65(x1) -> int:
    # Maria buys 'x1' shares of a stock for $8 each. 
    final_value = x1 * 8
    # The stock price increases 50% the first year Maria holds it
    final_value *= 1.5
    # Then decreases 25% in the second year.
    final_value *= 0.75
    # Return the final value of all Maria's shares.
    return final_value