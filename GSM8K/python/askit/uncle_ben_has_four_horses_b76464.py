# Recompilation count: 0
def uncle_ben_has_four_horses_b76464() -> int:
    # Uncle Ben has four horses. Each horse can consume five pounds of oats per meal. He feeds his horses twice a day. If one bag contains 50-pounds of oats,  how many bags of oats does he need to fed his horses for five days?
    horses = 4
    oats_per_meal = 5
    meals_per_day = 2
    days = 5
    oats_per_bag = 50

    # Calculate total oats needed
    total_oats = horses * oats_per_meal * meals_per_day * days

    # Calculate number of bags needed
    bags_needed = total_oats // oats_per_bag

    # If there are any remaining oats, add one more bag
    if total_oats % oats_per_bag > 0:
        bags_needed += 1

    return bags_needed