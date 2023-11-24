# Recompilation count: 0
def there_are_x1_bees_in_c484e8(x1) -> int:
    # There are 'x1' bees in a hive. There are twice as many worker bees as baby bees, 
    # and there are twice as many babies as queens. How many worker bees are there?
    # Let's denote: Q - Queen bees, B - Baby bees, W - Worker bees.
    # From the task we have three equations:
    # Q + B + W = X1
    # B = 2Q
    # W = 2B
    # Substitute B and W in the first equation:
    # Q + 2Q + 2 * 2Q = X1
    # 7Q = X1
    # Calculate the number of queens:
    queens = x1 // 7
    # Calculate the number of baby bees:
    babies = 2 * queens
    # Calculate the number of worker bees:
    workers = 2 * babies
    return workers