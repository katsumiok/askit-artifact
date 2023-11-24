# Recompilation count: 0
def faraday_owns_a_flower_shop_8ac88a(x1, x2) -> int:
    # Faraday owns a flower shop. He sells a sunflower that costs $2 each and a bouquet of sunflower that costs $8. If Faraday earned $26 from the sunflower and $56 from the bouquet per day, and if each bouquet has'x1'sunflowers, how many sunflowers was Faraday able to sell after'x2'days?

    # Find number of sunflowers and bouquets sold per day
    num_sunflowers_per_day = 26 // 2
    num_bouquets_per_day = 56 // 8

    # Find number of sunflowers in the bouquets sold per day
    num_sunflowers_in_bouquets_per_day = num_bouquets_per_day * x1

    # Total number of sunflowers sold per day
    total_sunflowers_per_day = num_sunflowers_per_day + num_sunflowers_in_bouquets_per_day

    # Total number of sunflowers sold after x2 days
    total_sunflowers = total_sunflowers_per_day * x2

    return total_sunflowers