# Recompilation count: 0
def there_are_x1_quarts_of_5c76c2(x1: int, x2: int, x3: float) -> int:
    # There are'x1'quarts of tea left from the party. Four students each drank 1.5 quarts of tea and'x2'students each drank'x3'quarts of tea. 
    # We calculate the total tea consumed and then add the left over tea in quarts. 
    # Since 1 gallon equals to 4 quarts, we convert the total quarts to gallons by dividing by 4.
    total_quarts = 4 * 1.5 + x2 * x3 + x1 
    total_gallons = total_quarts // 4  # we use '//' for integer division
    return total_gallons