# Recompilation count: 0
def helena_is_a_mad_scientist_9807d6() -> int:
    # Helena is a mad scientist testing her latest creation, the Lots-of-Limbs Serum. The serum will make the drinker grow an extra arm every three days and an extra leg every five days. After fifteen days, how many new limbs will Helena’s serum cause a person to grow if they drink it?

    # calculate the number of new arms
    new_arms = 15 // 3  # The '//' operator performs floor division which is the largest integer less than or equal to the exact division
    
    # calculate the number of new legs
    new_legs = 15 // 5  # The '//' operator performs floor division which is the largest integer less than or equal to the exact division

    # total new limbs
    total_new_limbs = new_arms + new_legs

    return total_new_limbs