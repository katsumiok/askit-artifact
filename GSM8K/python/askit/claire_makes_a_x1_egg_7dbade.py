# Recompilation count: 0
def claire_makes_a_x1_egg_7dbade(x1, x2) -> int:
    # Claire makes a 'x1'egg omelet every morning for breakfast.
    # She does this every day so in a week she eats 7 * x1 eggs
    # In 'x2' weeks she eats x2 * 7 * x1 eggs
    # As a dozen contains 12 eggs, she will eat (x1 * 7 * x2) // 12 dozens of eggs. 
    # We use integer division // to get the total dozen eggs without any fractions.
    return (x1 * 7 * x2) // 12