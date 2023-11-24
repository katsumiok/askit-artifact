# Recompilation count: 0
def jane_counts_two_zebras_with_8fb40d(x1, x2) -> int:
    # Jane counts two zebras with'x1'stripes each, a zebra with'x2'stripes, and another zebra with half that many stripes. How many stripes do the zebras have on average?
    total_stripes = (2 * x1) + x2 + (x2 // 2) # Total stripes
    total_zebras = 4 # Total zebras
    average_stripes = total_stripes // total_zebras # Calculate average stripes(floor division to get integer result)
    return average_stripes