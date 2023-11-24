# Recompilation count: 0
def a_2000_watch_was_put_2c5f55() -> int:
    # A $2000 watch was put on sale so that Mr. Rogers bought it at 75% of its original price. 
    purchase_price = 2000 * 0.75
    # He then sold the watch to his friend at 120% of the price that he bought it. 
    selling_price = purchase_price * 1.2
    # What is the percentage discount obtained by Mr. Roger's friend from the original price?
    percentage = (selling_price / 2000) * 100
    discount = 100 - percentage
    return int(discount)