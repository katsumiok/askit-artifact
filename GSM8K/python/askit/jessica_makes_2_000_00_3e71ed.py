# Recompilation count: 0
def jessica_makes_2_000_00_3e71ed() -> int:
    # Jessica makes $2,000.00 a month.  She sets 25% of her paycheck aside to put towards fancy shoes.  Each pair of shoes she buys costs $1,000.00.  How many shoes can she buy in a year?

    # Her monthly income directed towards shoes is 25% of $2000
    monthly_savings = 0.25 * 2000
    
    # Her annual savings would therefore be 12 times her monthly savings
    annual_savings = 12 * monthly_savings
    
    # Since a pair of shoes costs $1000, she can buy 'annual_savings/1000' pairs of shoes in a year
    number_of_shoes = annual_savings / 1000
    
    # we return the number of shoes she can buy in a year
    return int(number_of_shoes)