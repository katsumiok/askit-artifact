# Recompilation count: 0
def while_at_the_dollar_store_c9bec2(x1, x2) -> int:
    # While at the dollar store, Sloane counts 'x1' customers entering the store.
    # The next day, she counts 'x2' more customers than the first day. 
    # If the total number of customers by the third day was 500, 
    # how many customers did she count on the third day?
    first_day_count = x1
    second_day_count = x1 + x2
    # total count over the three days is 500. Thus, the third day count will be
    third_day_count = 500 - (first_day_count + second_day_count)
    return third_day_count