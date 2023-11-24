# Recompilation count: 0
def there_is_space_for_x1_d18c33(x1: int, x2: int) -> int:
    # There is space for'x1'pencils in the box. If there are'x2'pencils missing from the box, how many pairs of pencils are in the box?
    total_pencils = x1 - x2
    pairs_of_pencils = total_pencils // 2
    return pairs_of_pencils