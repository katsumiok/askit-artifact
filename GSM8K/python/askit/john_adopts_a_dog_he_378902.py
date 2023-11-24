# Recompilation count: 0
def john_adopts_a_dog_he_378902() -> int:
    # John adopts a dog.  He takes the dog to the groomer, which costs $100.  The groomer offers him a 30% discount for being a new customer.  How much does the grooming cost?
    original_price = 100
    discount = 30 / 100
    discounted_price = original_price - (original_price * discount)
    return int(discounted_price)