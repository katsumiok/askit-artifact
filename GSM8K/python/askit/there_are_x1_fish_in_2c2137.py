# Recompilation count: 0
def there_are_x1_fish_in_2c2137(x1) -> int:
    # There are 'x1' fish in the fish tank. One-third of the fish have red stripes, and 5/11 of the remaining fish have blue stripes. Altogether, how many fish have red stripes and blue stripes?
    red_stripes = x1 // 3
    remaining = x1 - red_stripes
    blue_stripes = (remaining * 5) // 11
    return red_stripes + blue_stripes