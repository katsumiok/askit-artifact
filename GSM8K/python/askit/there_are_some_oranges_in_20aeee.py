# Recompilation count: 0
def there_are_some_oranges_in_20aeee(x1, x2) -> int:
    # There are some oranges in a basket. Ana spends'x1'minutes peeling an orange and Jane spends'x2'minutes doing the same.
    # If Ana and Jane start picking oranges from this basket to peel at the same time, how many more oranges will Ana have peeled than Jane after an hour?

    ana_oranges = 60 // x1  # amount of oranges that Ana can peel in an hour
    jane_oranges = 60 // x2  # amount of oranges that Jane can peel in an hour

    return ana_oranges - jane_oranges  # how many more oranges Ana have peeled than Jane