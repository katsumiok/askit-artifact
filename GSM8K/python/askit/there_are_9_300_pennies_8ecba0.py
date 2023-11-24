# Recompilation count: 0
def there_are_9_300_pennies_8ecba0() -> int:
    # There are 9,300 pennies in a cup. What is the total dollar amount in a stack that contains two thirds of the pennies in the cup?
    pennies_in_cup = 9300
    stack_pennies = 2/3 * pennies_in_cup

    # Determining the dollar amount, considering that 1 dollar equals 100 pennies
    dollar_amount = stack_pennies / 100

    return int(dollar_amount)