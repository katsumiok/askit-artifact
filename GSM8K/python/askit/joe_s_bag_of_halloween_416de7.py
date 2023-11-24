# Recompilation count: 0
def joe_s_bag_of_halloween_416de7(x1, x2) -> int:
    # Joe's bag of Halloween candy has'x1'chocolate bars and'x2'candied apples. Each chocolate bar weighs twice as much as each candied apple. If each chocolate bar weighs 40g, how much does Joe's bag of candy weigh, in grams?
    chocolate_weight = x1 * 40  # Calculate total weight of chocolate bars
    apple_weight = x2 * 20  # Calculate total weight of candied apples (since they weigh half as much as a chocolate bar)
    total_weight = chocolate_weight + apple_weight
    return total_weight